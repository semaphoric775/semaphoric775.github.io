---
layout: ../../layouts/Layout.astro
title: A Fully Open Source gm/ID methodology
author: Eamon Murphy
description: gm/ID
---

# Fully Open Source gm/Id Methodology 1


## Background
A few years ago, during my graduate studies in analog electronics, I encountered the gm/Id methodology. It had always been challenging to quickly iterate from mathematical model to transistor sizing to functional circuit. Even in the context of older technology nodes like 180nm and 90nm, the square law exhibited limitations, 20% error for example. At deep submicron, DIBL and other short-channel effects ensure hand calculations will not match simulated results. Additionally, in scenarios where high transit frequency could be traded for power efficiency and large-signal swing, working in moderate and weak inversion lacked usable models.\
\
While designing circuits by "tweaking" or "tuning" parameters in SPICE was an approach, it didn't offer much intuition or precision. It was during this period that I stumbled upon the  work of Boris Murmann and Paul Jespers, who discussed transistor sizing based on precomputed lookup tables in their excellent book (https://www.amazon.com/Methodology-sizing-low-voltage-analog-Circuits/dp/0387471006).
\
\
I adopted a pseudo-gm/Id methodology approach, which involved sweeping operating points in Cadence and analyzing the resulting graphs. This method provided guidance in simple cases. For instance, in the second stage of an operational amplifier, I utilized gm/Id to minimize noise from the PMOS load device. By deliberately operating it at maximum speed, I purposely lowered transistor efficiency to reduce the thermal noise contribution. After this, I set the methodology aside for a while.

## Open Source
I've recently been delving into Open Source EDA tools, and the question of what tools exist for analog/mixed-signal design popped up. There are some great tools (KLayout, MAGIC, XSchem, IVerilog, etc), but I wondered how possible an opensource gm/Id methodology is. 
\
\
With the help of the pygmid package (https://pypi.org/project/pygmid/) and Dr. Murmann's existing 180nm lookup table, I made a brief demo of sizing a gain stage with constant gm/Id -- call it constant Vdsat if operating close to strong inversion. This is purely a testcase for the tools, and I might branch out to a more complex design done with only open source tools, maybe an LDO or DAC, using the Skywater 90nm SOI or 130nm PDK. 

## The Code

```python
from pygmid import Lookup as lk
import matplotlib.pyplot as plt
import numpy as np
from decimal import Decimal

```


```python
# Sourced from: https://github.com/bmurmann/Book-on-gm-ID-design
NCH = lk('180nch.mat')
```


```python
# Sizing an Intrinsic Gain Stage (IGS) at a constant gm/ID ratio
# driving a 1puff load, assuming midrail VDS, bulk connected to ground
# targeting a GBW of 100MHz

CL = 1e-12
gm_ID = 15
fu = 100e6
VDS = 0.6
VSB = 0
#derive gm from unity gain bandwidth
gm = 2*np.pi * fu*CL;
#calculate bias current
ID = gm / gm_ID;
#bias current density
JD = NCH.lookup('ID_W', GM_ID=gm_ID, L=NCH['L'])
#transistor width from density and bias requirement
W = ID / JD

#Calculate fanout for every option
# though unconvential for analog circuitry, fanouts > 10 hold well for the gm/Id model
# see Murmann book for more info
fT = NCH.lookup('GM_CGG', GM_ID=gm_ID, L=NCH['L'])
FO = fT/fu

Lmax = np.max(NCH['L'][FO > 10])
print(f'Maximum length possible is {Lmax}')
```

    Maximum length possible is 1.8



```python
%matplotlib inline
#throw away any possible lengths leading to low fanout
L = NCH['L'][FO > 10]
#reindex possible values based on fanout
JD = NCH.lookup('ID_W', GM_ID=gm_ID, L=L)
W = ID / JD
fT = NCH.lookup('GM_CGG', GM_ID=gm_ID, L=L)
Av0 = NCH.lookup('GM_GDS', GM_ID=gm_ID, L=L)

#plot all possible options
#blue point is chosen arbitrarily
plt.figure()
plt.plot(L, W, label='W(um)')
plt.plot(L, Av0, linestyle='dashed', label='|Av0|')
plt.plot(L, FO[FO > 10], label='Fanout')
plt.plot(0.6, 110, 'bo')
plt.legend()
plt.axis([0, 1.8, 0, 300])
plt.xlabel('L (um)')
plt.show()
```

## Possible Sizings
    
![png](/assets/project_screenshots/gm_on_id1.png)
    



```python

```

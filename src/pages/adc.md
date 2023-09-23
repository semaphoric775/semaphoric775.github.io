---
layout: ../layouts/Layout.astro
title: SAR ADC
author: Eamon Murphy
description: SAR ADC
---
# A 30MS/s Low Power SAR ADC

This was a course project for ECE 712 (data converters) during the Fall 2022 semester.  The primary objective of this project was to create an 8+ Effective Number of Bits (ENOB) Analog-to-Digital Converter (ADC) capable of operating at a Nyquist rate of 15MS/s. The top-level schematic for this project is displayed below. To achieve this goal, the project involved the implementation of several key components, including a modified Strongarm Comparator, Charge Redistribution Digital-to-Analog Converter (DAC), Bootstrapped Track and Hold circuit, and digital control logic.

## Toplevel Schematic

![Toplevel](/assets/project_screenshots/ADC/topLevelSchematic.png)

## The Comparator
![Toplevel](/assets/project_screenshots/ADC/Comparator.png)
![Toplevel](/assets/project_screenshots/ADC/comparatorTransient.png)

## The DAC
![Toplevel](/assets/project_screenshots/ADC/splitChargeDAC.png)
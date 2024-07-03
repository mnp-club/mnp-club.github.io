---
layout: post
title: Spin Qubits, NV Centres and NMR Qubits
modified:
categories: quarantalks
excerpt:
tags: [MnP, summers]
author : Parth Jatakia
comments: true
image:
  feature:
date: 2020-05-09T20:00:00+00:00
---
What nitrogen vacancy centres in diamonds? What is NMR quantum computing? How is a qubit represented and what are quantum gates? How do you fabricate a spin qubit using silicon architecture?

<!-- TYPE ARTICLE BELOW -->
<!-- Use ### for header_1 -->
<!-- Use <b></b> for header_2 -->
<!-- No suffix required for normal text -->
<!-- Use <i></i> for ending notes -->

Parth Jatakia started his talk with the Dirac notation used for representing quantum states, followed by the parametric representation of a single qubit, which can be used to locate the qubit on the Bloch sphere. Then he listed some common single qubit gates as well as two qubit gates (along with their matrix representations), and described how a single qubit gate represents a rotation in the Bloch sphere. Then it was stated that any rotation in the Bloch sphere can be represented as a combination of rotations about two orthogonal axes. A quantum circuit for creating entangled qubit pairs was illustrated, following which the DiVincenzo criteria were listed, which are conditions necessary for constructing a quantum computer. These criteria include: qubits, initialisation, universal gate operations, readout, long coherence times, quantum interfaces for qubit interconversion and optical communication via flying qubits. Parth pointed out that the quantum systems realized till date do not fulfil all the criteria, some of them still being under research.  
The first system he spoke about was NMR (Nuclear Magnetic Resonance) based quantum computing in which nuclear spins inside molecules are used, and in the talk he described how to prepare and control these nuclear spins, and the problems due to which people have stopped using this system.  
In 1997, Isaac Chuang from MIT built the first quantum computer (a two qubit one) based on NMR and he later on showed Shor’s algorithm on it. In NMR, atoms with nuclear spin ½ can be made into two level systems using a strong magnetic field. Molecules with nuclear spins are kept under cryogenic conditions between a strong magnet to create two states. In NMR, initialisation is tricky, since the thermal states of the nuclear spins are impure, due to which the system falls behind. Gates are realised by sending an AC current (the same technique is used for the next two systems as well), whose magnetic field couples with that of the molecules (since they behave like bar magnets), resulting in rotations in the Bloch sphere. There are many hindrances faced in NMR, some of them being, the AC pulses need to be short hence requiring strong magnetic fields which in turn start affecting other qubits, only 6-12 qubit systems can be realised (poor scalability) since molecules with many distinct atoms are required for multiple qubits, etc.  
The next system he spoke about was silicon-based quantum dots quantum computing, and he described how to experimentally realise quantum dots, how to build a spin qubit inside that quantum dot and so on. He started with describing how 3D confinement is used to create quantum dots and stated silicon is widely used for making quantum dots because of its already developed architecture. The architecture used for 3D confinement was then described, which also requires cryogenic cooling. Some of the challenges faced in quantum dots QC are getting one electron in each quantum dot, the low decoherence time etc. Its small size acts as both an advantage as well as a disadvantage, since it’s difficult to make but convenient to use. Experiments performed in IITB by the speaker were also illustrated.  
The last quantum state discussed was the Nitrogen Vacancy Centers based in diamond, whose physical structure was described along with how to control the qubits. The system of interest has a nitrogen atom and a vacancy occupying two adjacent lattice points in diamond. The energy states of this system were described, along with the technique used for initialisation of qubits by means of radiation. He described the use of fluorescence for distinguishing between quantum states and also how interaction between different quantum systems can be used to increase scalability, but carrying this out is tough, e.g., in NV-NV coupling, the precise location and range of coupling are some of the problems faced.  
He described some more experiments being carried out in IIT Bombay and ended the talk by comparing the working of different quantum systems, which indicated the performance of superconducting qubits to be the best.  
Here are the links to the <a href="https://drive.google.com/file/d/1sWodqJuZvyRxgx-pbAYyCmfiCvKlEAmS/view?ts=5eb6c404" target="_blank"><i>slides </i></a>and the <a href="https://drive.google.com/file/d/1Y7TOMhj-KNsMNEOGl6_I4t5mR0Ir_D1z/view?ts=5eb6cd23" target="_blank"><i>recording </i></a>
<i>Parth is working with Prof. Kasturi Saha of the Department of Electrical Engineering on building Nitrogen Vacancy Centre experiments and observing some weird quantum mechanical properties of spins! He also has a work experience with Prof. Suddhasatta Mahapatra of the Department of Physics on the experimental realisation of two-qubit quantum architecture in silicon. Parth is also a passionate researcher and will be joining Princeton University as a Ph.D. student, this fall. He is interested in the physical realisation of the quantum computer, and employing hybrid quantum systems for QC.</i>

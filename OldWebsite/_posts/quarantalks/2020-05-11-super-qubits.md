---
layout: post
title: Superconducting Qubits and Topological Quantum Computing
modified:
categories: quarantalks
excerpt:
tags: [MnP, summers]
author : Chaitrali Duse
comments: true
image:
  feature:
date: 2020-05-11T20:00:00+00:00
---
A journey through a promising platform for quantum computing to find out what makes superconducting qubits one of the most successful architectures so far, with giants like Google and IBM racing to outperform each other! Learn about the different types of superconducting qubits and the implementation of control pulses. Dive into the exotic world of topological quantum computing, which promises a robust and fault-tolerant approach to implementing a QC

<!-- TYPE ARTICLE BELOW -->
<!-- Use ### for header_1 -->
<!-- Use <b></b> for header_2 -->
<!-- No suffix required for normal text -->
<!-- Use <i></i> for ending notes -->

The talk started with stating how important superconducting and topological quantum computing is given how much Google, IBM and Microsoft (just to name a few) is invested in it - and for good reason too and also explored the recent claim of Google having achieved Quantum Supremacy. We then started with superconducting qubits and their types which are the charge qubit, flux qubit and the phase qubit.  
A true qubit has only two levels but this is not possible ideally since there will always be the probability of transition to higher excited states when working with an atom. Now, if we look at the Harmonic oscillator which can be created using a simple LC oscillator, the successive states have a constant energy gap. This would be troublesome for using as a qubit so we use an anharmonic oscillator which introduces non-linearity and is created using a nonlinear inductive element in the LC oscillator circuit.  
This is done using a Josephson junction which is essentially an insulator between two superconductors. This makes for a fairly reliable qubit since the energy differences between successive states is pretty high now and this is anharmonicity. Superconducting qubits provide us this freedom to design and tune system properties which is what makes it useful. There was a brief discussion on transmon and how they potentially offer a great improvement in terms of coherence time.  
Then we discussed readout and coupling for superconducting qubits. Here we use a resonator to find out which state the qubit is in based on its resonance frequency using the Jaynes-cumming model. For executing quantum gates which are essentially rotations on the Bloch sphere we use microwave pulses and two qubit interactions can be done via a bus resonator. We then see that superconducting qubits have their own disadvantages too like low temperature requirements and error correction and decoherence.  
We then talked about topology and how it can be used in quantum computing. We then talk about majorana states. We start off with a different kind of particle called anyons which we have two of these together which we call as our majorana state, interchanging their wave functions introduces some phase factor to our total wave function. Another particle we discussed was the Majorana fermion which happens to be its own antiparticle. Majorana bound states are quasiparticles in condensed matter systems with similar properties which are non Abelian anyons. Each fermionic state corresponds to a pair of Majorana states and so one bit of information is stored non locally in two separated Majorana states.   
The non-abelian statistics of Majorana states allow ‘braiding’ of these states by interchanging them. We can essentially execute quantum gates in a pretty elegant fashion using this braiding concept. We then discussed how detection of majoranas work and the current experimental advances in it with the new hashtag majorana setup.  
<i>Chaitrali Duse is a third year undergraduate student in the Department of Physics at IIT Bombay</i>

---
layout: post
title: Random Number Generator
modified:
categories: blog
excerpt:
tags: [MnP, Summers]
author : rohinee
comments: true
image:
  feature:
date: 2020-06-10T10:19:07+00:00
---

It is said that scientific research is primarily about observing the wonders of nature, trying to identify the patterns and analysing and developing theories based on the observations. Recognizing patterns - why does it seem to be the central theme of various discoveries? Are there patterns in all aspects of life? Or is the world governed
by chance? It seems like randomness stalks us every day of our lives.  So, can we build a perfectly random system such that we are not able to develop connections between the given data? 

### Randomize();
The Random Number Generator is a device that generates a sequence of numbers or symbols that can’t be reasonably predicted better than by a random chance. The distribution of probabilities for each number is uniform across the range of all possible values. Intuitively speaking, we have developed Random Number Generator Machines, just for the sake of ensuring randomness and chaos in a
given system.  

Many things in real life are so complicated that
they appear random. To simulate these processes, we need random numbers; hence RNGs are used in areas like shuffling of a deck of cards, cryptography, and even the changing shapes of clouds!  

We repeat the unpredictable event many times to gain an impression of what usually happens, detect trends and learn to recognize outliers. Thus, we use RNGs in scientific experiments, meteorology and even gambling!  

Some randomized algorithms are faster than their deterministic counterparts. RNGs are at the heart of algorithms to ensure that we do not repeatedly encounter the worst-case performance.  

The generation of random numbers is too important to be left to chance. There are primarily two types of RNGs. The first type is Pseudo-Random Number Generators, which use mathematical formulae or pre-calculated tables to produce a sequence of numbers that appear to be random. The Linear Congruential Generator is a widely used recursive method that uses modular arithmetic and is fast and easy to implement. The recursive term is, where a, c, m are integers and is the initially randomly chosen integer. In this method, the choices of a, c and m are important as it determines the randomness of the algorithm. For example, RANDU was a widely used generator in the 1970s but later it was discovered that the numbers were not very random due to poor choice of a, c and m.  



A clever choice is choosing m as a prime or a power of a prime, c=0, and a as a primitive root of m. Scharge’s method is widely used in this case, and Mersenne primes are the popular choices for m. The disadvantages of this method are that modular reduction requires double-width product, and it is difficult to convert x to uniform random bits. Another good approach is to choose m and c to be coprime integers and to choose a such that all prime factors of m divide a-1, and if 4 divides m, then it also divides a. It is useful for m to have repeated prime factors. The Hull Dobell theorem ensures the randomness by this method, and the major advantage of this method is that it provides the maximum period. The pseudo-random number generators are widely used for computer programs.  

However, to ensure security, we use special cryptographically secured PRNGs, that are used to generate keys, nonces and salts.  


Pseudo-RNGs, however, fail to generate randomness in the true sense, and hence we develop True Random Number Generators, that are not based on mathematical algorithms but purely on natural physical phenomena. Regardless of the source of randomness, the process involves identifying small unpredictable changes in data and generating numbers based on that. Some TRNGs use variations in mouse movements, or the amount of time lag between keystrokes. Some TRNGs like <a href="https://www.random.org/" target="_blank"><i>random.org </i></a>pick atmospheric noise. Well, Lavarand generator built by silicon
graphics uses the snapshots of lava lamps, a visually cool approach of a TRNG!  
The JAVA entropy pool gathers random bits from various sources as the input. In the chaotic system mentioned above, the tiny changes in initial conditions can dramatically change overall behaviour. To ensure constant randomness, the TRNGs based on quantum physics use the fact that subatomic particles appear to behave randomly in certain circumstances. These TRNGs are deterministic from the time of the Big Bang, but since no human measurement till date has been able to account for their behaviour, we can assume it to be nondeterministic.
Radioactive sources are good RNGs as the points in time at which they decay are unpredictable! A company HotBits service in Switzerland uses this technique. However ‘perfect’ the TRNGs seem, they are inefficient compared to PRNGs. Being non-deterministic, non-periodic devices, TRNGs are used in data encryption, games and gambling.  

Wait, can we really say that the generated numbers are truly random?  

The generation of random numbers is too important to be left to chance!  

The statistical analysis says, no, we can’t prove the randomness of the numbers, but pragmatically what we can do is take many sequences of random numbers from a given generator and subject them to a battery of statistical tests. A good generator would pass more tests.  

However counterintuitive it may seem, for a good generator, some sequences should fail the test! This is because, for a good RNG, every possible sequence of values is equally likely to appear. It will also produce sequences that look nonrandom to the human eye and hence it would also fail some statistical tests that we might expose it to. There are multiple tests to determine the randomness of a generator, a few names being: monobit frequency test, block frequency test, runs test, test for the longest runs of ones in a block, binary matrix rank test, Discrete Fourier transform (spectral test), non-overlapping template matching test, overlapping template matching test, Maurer's universal statistical test, linear complexity test, serial test, approximate entropy test, cumulative sums test, random excursion test, chi-square test, a test of runs above and below the median, reverse arrangement test, etc.



Whether humans can behave randomly is an important question in psychology and also the gaming industry. Interestingly, neither can randomness be proven, nor can we discover patterns in each system. It seems that the world is determined by pure randomness. On the other hand, the famous scientist Albert Einstein said that though quantum mechanics certainly is imposing, at any rate, he was convinced that there are patterns in everything- God is not throwing a dice. There are different opinions and theories about randomness and creating order. Here, RNGs themselves help to recognize patterns using randomness, which are not random(!).  



Randomness and patterns have a mysterious correlation between them. Perhaps, creativity is the ability to introduce order into the randomness of nature!  

---
layout: post
title: Cryptography
modified:
categories: blog
excerpt:
tags: [MnP, Summers]
author : rgoyal
comments: true
image:
  feature:
date: 2017-07-21T10:19:07+00:00
---
You connect your phone to a computer and a message pops up saying, "trust or don't trust this computer" What is this trust? Why can you download only certified apps ? How do you get to talk over email, what makes you so sure that you can share your bank details over the internet? Raghav Goyal studies the basics of cryptography, which includes historic encryption methods from the world war II to modern times and a lot more . You can find a report of his learnings here!


### Bits and Public key Systems:
<b>Bit Strings</b>

Modern ciphers do not involve letter substitutions. They tend to use an encoding scheme to convert the message into a sequence of binary digits. The most commonly used encoding scheme is probably ASCII. This bit sequence representing the plaintext is then encrypted to give the ciphertext as a bit sequence.

ASCII requires eight bits to represent one character, and so for a block cipher that has 64-bit blocks, the encryption algorithm acts on eight characters at once.

Consider the following sequence of 12 bits: 100111010110. If we split into blocks of size 3 we get: 100 111 010 110, our sequence becomes 4 7 2 6.

000=0, 001=1, 010=2, 011 = 3, 100=4, 101=5, 110=6, 111 = 7

Another common way of writing bit-strings is to use the hexadecimal notation (HEX). For HEX the string is divided into blocks of size 4 with the following representation:

0000 = 0 0100 = 4 1000 = 8 1100 = C

0001 = 1 0101 = 5 1011 = 9 1101 = D

0010 = 2 0110 = 6 1010 = A 1101 = E

0011 = 3 0111 = 7 1011 = B 1111 = F

<b>Symmetric cryptography:</b>

a) stream cipher       b) block cipher

Stream cipher encrypts bits individually.

Encryption and decryption are simple additions modulo 2 (aka XOR)

• Encryption and decryption are the same functions

• Encryption: yi =esi(xi )=xi +si mod2 xi ,yi ,si ∈{0,1}   • Decryption: xi =esi(yi )=yi +si mod2

<b>Modulo 2 addition is equivalent to XOR operation (Nice way of encryption)</b>

• For perfectly random key stream si , each ciphertext output bit has a 50% chance to be 0     or 1 .

• Inverting XOR is simple, since it is the same XOR operation

![XOR Truth table](https://rgssmaths.files.wordpress.com/2017/05/screen-shot-2017-06-02-at-10-03-06-pm.png)

<b>Block Ciphers:</b>

Always encrypt a full block (several bits)
Are common for Internet applications
Initially it was thought, best way to secure a system is to keep the encryption and decryption secret from the public! However recently its been realised that encrytion and decryption algorithms should be kept open reason is, its the only way to be sure that the functions used are secure.

This highlights a potential weakness for stream ciphers because anyone who is able to launch a known plaintext attack can deduce parts of the keystream sequence from the corresponding plaintext and ciphertext bit pairs. Thus, users of stream ciphers must protect against attacks where the attacker deduces part of the keystream

Block ciphers can be used to provide confidentiality, data integrity, or user authentication, and can even be used to provide the keystream generator for stream ciphers. As with stream ciphers, it is very difficult to give a precise assessment of their security. If an attacker has obtained a known plaintext and ciphertext pair for an unknown key, then that should not enable them to deduce easily the ciphertext corresponding to any other plaintext block. This is just one reason for requiring a block cipher to satisfy the <b>diffusion property</b> which is that a small change in the plaintext, maybe for example in one or two positions, should produce an unpredictable change in the ciphertext. Block ciphers should satisfy the confusion property which is, in essence, that if an attacker is conducting an exhaustive key search then there should be no indication that they are ‘near’ to the correct key.

The simplest, and perhaps the most natural, way to apply a block cipher to a long message is to divide the binary sequence into blocks of appropriate size and then to encrypt each block individually and independently. When this occurs we say we are using the <b>Electronic Code Book mode</b> or <b>ECB mode</b>.

Each of these potential dangers of using a block cipher in ECB mode can be removed by arranging for the encryption of each individual block to depend on all the message blocks that precede it in the message. If this is done, then identical message blocks almost certainly give distinct cryptogram blocks, and manipulation of the cryptogram is likely to result in meaningless messages after decryption has been applied. There are two standard ways of effecting this. They are known as <b>Cipher Feedback (CFB) mode</b> and <b>Cipher Block Chaining (CBC) mode</b> and are discussed later.

Large messages need to be condensed into short bit-strings, it is inevitable that more than one message can give rise to the same shorter bit- string and this automatically implies that the process is irreversible. These functions are known as <b>hash functions</b> and, depending on the application, they may or may not involve the use of a cryptographic key.

The basic idea of a hash function is that the resultant hash value is a condensed representative image of the message. The hashed value has a number of names including digital fingerprint, message digest, or, not surprisingly, a hash. Hashing has a number of applications, including the provision of data integrity and as part of the digital signature process.

In a public key cryptosystem each entity has a public key and a corresponding private key. These keys are chosen so that it is practically impossible to deduce the private key from the public key. Anyone wishing to use this system to send a secret message to someone else needs to obtain that person’s public key and use it to encrypt the data. It is also worth observing that when a public key system is used to provide confidentiality then, since the public encryption key is widely known and can be used by everyone, the ciphertext does not provide any authentication of the sender.

For a public key system both the <b>algorithm and the encryption key are public</b>. Thus an attacker is faced with the task of trying to deduce the message from the cryptogram. Encryption process needs to be chosen very carefully. Genuine receiver needs to be able to decrypt easily. Thus the process must be chosen so that knowledge of the decryption key facilitates the determination of the message from the cryptogram.

### Perfect Secrecy:
<b>An Example:</b>

Suppose that Mr X is about to make a decision that will have serious repercussions on the share value of a company. If he makes the decision ‘buy’ then the shares will increase in value, but the decision ‘sell’ will result in a collapse in their value. Clearly anyone who received this decision before the broker would have the opportunity to use that information to either make a profit or avoid a disastrous loss, depending on the decision.

In order to protect their interests, he and his broker decide to encrypt the message that will convey the decision. One option might be to use a Simple Substitution Cipher that, as we have already noted, is usually sufficient for protecting short messages. Knowledge of the length of the cryptogram would be sufficient to give the interceptor 100 per cent confidence that he knew the message, even though he could not determine the key used.

Another option might be to use the following system in which the two keys, k1 and k2, are equally likely. In order to describe the complete algorithm we use a standard notation. For key k1, the ciphertext for the plaintext message BUY is 0 while the ciphertext for SELL is 1. To express this simply we write

Ek1 (BUY) = 0 and Ek1 (SELL) = 1.

The complete cipher is:

<b>Key k1: Ek1 (BUY) = 0, Ek1 (SELL) = 1</b>

<b>Key k2: Ek2 (BUY) = 1, Ek2 (SELL) = 0</b>

Note that, in essence, before the cryptogram was intercepted the attackers’ only option was to try to guess the message. Once the cryptogram was received, they could also guess the key. Since the number of keys is the same as the number of messages, the chances of either guess being correct are equal. This is <b>perfect secrecy</b>.

<b>One-time Pad</b>

The classic example of a <b>perfectly secure cipher system</b> is the one-time pad. If the message is a passage of English text containing <b>n letters</b> with all punctuation and spaces removed, then the key, which is only used once to protect a single message, is a randomly generated sequence of n letters from the alphabet. The encryption rule is precisely that used for the <b>Vigenère Cipher</b> with the key replacing the keyword. Thus, if we associate each letter A to Z with the numbers 0 to 25 in the usual way, for message m1, m2,…, mn and key k1, k2,…, kn, the ith component of the

cryptogram is given by:

<i><b>ci = (mi + ki) mod 26</b></i>

There is another common version of this algorithm often called a <b>Vernam Cipher</b> where the alphabet used is <b>binary</b>, that is 0 and 1, and the cryptogram is obtained by adding the message and key modulo 2.

The problem with the one-time pad is that, since the keystreams are random, it is impossible to generate the same keystream simultaneously at both the sender and receiver. Thus they require a second secure channel for distributing the random keys



<b>Problem:</b>

The implementers of the communications system are now faced with a potentially difficult problem. How does the receiver obtain this random sequence? Since the sequence is randomly generated it is ‘impossible’ for the sender and receiver to generate the same key simultaneously. One-time pads can only be used if the communicators have a second secure means of exchanging information.

### Types of ciphers:
<b>Modern application of cryptography</b>

GNU pg
Tru-crypt
Secure shell
plugin for thunderbird
cell phone
bank cards
VPN
IPOD
kindle
Even our mobiles, GSM was one of the best advances in cryptography. Voice encryption basically!

<i><b>Caesar Cipher</b></i>

Caesar Cipher described each of the letters A to W is encrypted by being represented by the letter that occurs three places after it in the alphabet. (shift of 3). here shift can be by any number and it is vulnerable to attack.

Let k, x, y ε {0,1, …, 25}
• Encryption: y=ek(x)≡x+kmod26      • Decryption: x=dk(x)≡y-kmod26

<i><b>Affine cipher</b></i>

Improving caesars cipher
y=(a.x+b) mod26

<i><b>Simple Substitution Ciphers</b></i>

Although having a <b>large number of keys is a necessary</b> requirement for cryptographic security, it is important to stress that having a large number of keys is certainly no guarantee that the cipher system is strong. The discussion of this cipher establishes the dangers of relying on a large number of keys as an indication of strength.

![English text frequencies](https://rgssmaths.files.wordpress.com/2017/05/screen-shot-2017-05-11-at-12-12-58-pm.png?w=739)

When a Simple Substitution Cipher is used each specific letter of the alphabet is replaced by the same substituted letter. Thus if, for example, we use a cipher where R replaces E, then the frequency of R in the cryptogram is equal to the frequency of E in the message.

The number of keys for a Simple Substitution Cipher is equal to the number of ways in which the 26 letters of the alphabet can be arranged. It is called 26 factorial and is denoted by 26!

note that there is a 200-page novel that does not use the letter E (Gilbert Adair’s translation of A Void by Georges Perec).

<i><b>adPlayfair cipher</b></i>

The Playfair  is an example of a <b>‘Bigram‘</b> Cipher. This means that letters are encrypted in pairs, as opposed to individually. The key is a 5 by 5 square (with entries comprised of the 25 letters obtained by <b>deleting J</b> from the alphabet).

Before encrypting using a Playfair Cipher the message has to be <b>rearranged</b> slightly. To do this you:

replace J’s with I’s

write message in pairs of letters

do not allow identical pairs – if they occur insert Z between them

if the number of letters is odd, add Z to the end

![](https://rgssmaths.files.wordpress.com/2017/05/screen-shot-2017-05-11-at-12-44-25-pm.png)

We extend the key by adding a sixth column and a sixth row to the original key. The sixth row is identical to the first row, while the sixth column is identical to the first column.

![](https://rgssmaths.files.wordpress.com/2017/05/screen-shot-2017-05-11-at-12-47-51-pm.png)

The rule for encryption is as follows.

If the two letters lie in the same row of the key then each letter is replaced by the one on its right in the extended key.

If two letters lie in the same column of the key then each letter is replaced by the one below it in the extended key.

If the two letters are not in the same row or column then the first letter is replaced by the letter that is in the row of the first letter and the column of the second letter. The second letter is replaced by the fourth corner of the rectangle formed by the three letters used so far.

We now encrypt the message: GOOD BROOMS SWEEP CLEAN

<b>GO OD BR OZ OM SZ SW EZ EP CL EA NZ</b>

The complete cryptogram is

<b>FP UT EC UW PO DV TV BV CM BG CS DY</b>


<i><b>Homophonic Coding</b></i>

Introducing some extra characters so that, for ex, the plaintext letter E is represented by more than one ciphertext character.

These extra characters are known as randomizing elements and the process of <b>expanding the alphabet is called homophonic coding</b>. As an illustration we might introduce a cipher where the alphabet for the cryptogram would be the numbers 00, 01, 02,…, 31. Each cryptogram number represents a unique plaintext letter but the letters A, E, N, O, R, T are each represented by two distinct letters.

![](https://rgssmaths.files.wordpress.com/2017/05/screen-shot-2017-05-30-at-1-49-35-pm.png?w=739)

<i><b>Polyalphabetic Ciphers</b></i>

When a homophonic cipher is used, the frequency histogram of the cryptogram is made flatter by increasing the size of the alphabet. This ensures that more than one ciphertext character may represent the same plaintext character. However, it is still true that each ciphertext character represents a unique plaintext character and there is always the danger of an attacker compiling a dictionary of known plaintext and ciphertext pairs for a given key.

<i><b>Vigènere Ciphers</b></i>

The Vigenère Cipher is probably the best known of the ‘manual’ polyalphabetic ciphers.

![](https://rgssmaths.files.wordpress.com/2017/05/screen-shot-2017-05-11-at-1-50-13-pm.png)

One of the most common methods for using the square to obtain a cipher

Message : <b>P L A I N T E X T</b>

Key : <b>f r e d f r e d f</b>

To encrypt the initial letter P we use the key letter beneath it which, in this case, is f. Thus to encrypt P we go to the row of the square determined by f and read off the letter beneath P, which is U. Similarly we encrypt L by taking the letter underneath it in the row determined by r, which is C. The process for encrypting P with key letter f is illustrated here.

<i><b>Transposition Ciphers</b></i>

In our example the key is a small number. We use <b>5 as the key</b>. In order to encrypt a message using this key, we write the key in rows of 5 letters and encrypt by writing the letters of the first column first, then the second column etc. If the length of the message is not a multiple of 5 then we add the appropriate number of Zs at the end before we encrypt. The process is most easily understood by working through a small example.

We encrypt the message WHAT WAS THE WEATHER LIKE ON FRIDAY. Since the key is 5 the first step involves writing the message in rows of 5 letters. This is:

WHATW ASTHE WEATH ERLIK EONFR IDAY

Since the length of the message is not a multiple of 5, we must add one Z to get: WHATW

ASTHE WEATH ERLIK EONFR IDAYZ

We now read down <b>each column</b> in turn to get the following cryptogram:

WAWEEIHSERODATALNATHUFYWEHKRZ

<i><b>SUPER ENCRYPTION</b></i>

Combination of two or more ciphers.

If, say, we want to super-encrypt using a Simple Substitution Cipher and a Transposition Cipher, then we first encrypt the message using the Simple Substitution Cipher, and then encrypt the resultant cryptogram using the Transposition Cipher.

### Basics of cryptography:

![](https://rgssmaths.files.wordpress.com/2017/05/screen-shot-2017-05-28-at-5-40-07-pm.png)

The attacker is only able to break an algorithm if they have sufficient information to enable them to recognize the correct key or, more frequently, to identify incorrect keys. It is important to realize that this extra information is likely to be crucial to the attacker. Suppose, for instance, that they know the plaintext was English text, and that the decryption of some ciphertext using a guessed key does not give meaningful English plaintext. In this case, the guessed key must be incorrect.



A cipher system is called <b>symmetric</b> if it <b>easy</b> to deduce the decryption key from the encryption key. However, if it is practically impossible to deduce the decryption key from the encryption key, then the system is called <b>asymmetric or public key</b>. One reason for distinguishing between these two types of system should be clear. In order to prevent an interceptor with knowledge of the algorithm from obtaining the plaintext from intercepted ciphertext it is <b>essential that the decryption key should be secret</b>. Whereas for a symmetric system this necessitates that the encryption key should also be secret, if the system is asymmetric then knowledge of this key is of no practical use to the attacker. Indeed it can be, and usually is, made public. One consequence of this is that there is no need for the sender and receiver of a cryptogram to share any common secrets. In fact there may be no need for them to trust each other.



There is a famous principle of cryptography which asserts that the security of a cryptographic system must not depend on keeping secret the cryptographic algorithm it should depend only on keeping secret the decryption key.



An attack which utilizes the existence of known <b>plaintext and ciphertext pairs</b> is called a known <b>plaintext attack</b>. If the plaintext is selected by the attacker then it is a <b>chosen plaintext attack</b>. Finally, an attack which has direct knowledge only of the ciphertext is known as a <b>ciphertext-only attack</b>.



If we assume that our <b>decryption algorithm is known</b> then there is one obvious method of attack available to any adversary. They could, at least in theory, <b>try each possible decryption key</b> and ‘hope’ that they identify the correct one. Such an attack is called an <b>exhaustive key search</b>. However, as we see when we consider some simple examples, unless there is sufficient volume of corresponding plaintext and ciphertext pairs, there may be many incorrect choices for the decryption key which give the correct answers for all the available ciphertext.



<i><b>Keys: A real life situation</b></i>

For the example we assume that the sender has a present, which he wants to lock in a briefcase with a padlock and send to someone, whom he is not prepared to trust with his own key. Instead the sender instructs the intended receiver to buy his own padlock and key.

<b>Step 1:</b> The sender places the present in the briefcase, which they lock with their padlock and remove their key. They then send the locked briefcase to the receiver.

However, the receiver is also unable to obtain the present.

<b>Step 2:</b> The receiver locks the briefcase with their own padlock and removes the key. They then return it to the sender.

The briefcase is now locked with two padlocks so no one can get the present. The sender uses their own key to remove their padlock from the briefcase and returns the briefcase to the receiver.

<b>Step 3:<b> The receiver removes their padlock from the briefcase to obtain the present.

<i><b>PROBLEM HERE:</b></i>

In this simplistic example we have to admit that the sender has no way of knowing whose padlock is on the briefcase and that it might be possible for an adversary to impersonate the receiver and place their padlock on the briefcase. This is a problem that has to be addressed. The Whose padlock is it?’ question in this briefcase example is similar to the Whose public key is it?’ question that is so important when public key systems are used.



<i><b>Kerckhoffs’s Principle:</b></i>

The principle says that the system should be secure even if the attacker knows all the details about the system with the exception of the secret key.

![](https://rgssmaths.files.wordpress.com/2017/05/screen-shot-2017-06-01-at-3-32-32-pm.png?w=739)

<b>Classical Attacks</b>
•Mathematical Analysis • Brute-Force Attack

<b>Implementation Attack:</b>  Try to extract key through reverese engineering or power measurement, e.g., for a banking smart card.

<b>Social Engineering:</b>  E.g., trick a user into giving up his/her password

<i><b>Arithmetic Modulo:</b></i>

By doing arithmetic modulo m we obtain the integer ring <b>Zm</b>

An element a ε Zm has a multiplicative inverse <b>only if: gcd (a, m) = 1</b>

• Ex: We consider the ring Z9 = {0,1,2,3,4,5,6,7,8}
The elements 0, 3, and 6 do not have inverses since they are not coprime to 9. The inverses of the other elements 1, 2, 4, 5, 7, and 8 are:

1-1 ≡ 1 mod 9 2-1 ≡ 5 mod 9 4-1 ≡ 7 mod 9 5-1 ≡ 2 mod 9 7-1 ≡ 4 mod 9 8-1 ≡ 8 mod 9

### Introduction to cryptology:

![](https://rgssmaths.files.wordpress.com/2017/05/screen-shot-2017-06-01-at-2-29-31-pm.png?w=739)

Cryptology is defined as the science of making communication incomprehensible to all people except those who have a right to read and understand it. The study of cryptology consists of two parts:

• cryptography, which concerns itself with the secrecy system itself and its design, and

• cryptanalysis, which concerns itself with the breaking of the secrecy system above.



Early signs of encryption in Eqypt in ca. 2000 B.C. Letter-based encryption schemes (e.g., Caesar cipher) popular ever since.

• <b>Symmetric ciphers:</b> All encryption schemes from ancient times until 1976 were symmetric ones.

• <b>Asymmetric ciphers:</b> In 1976 public-key (or asymmetric) cryptography was openly proposed by Diffie, Hellman and Merkle.

• <b>Hybrid Schemes:</b> The majority of today‘s protocols are hybrid schemes, i.e., the use both symmteric ciphers (e.g., for encryption and message authentication) and asymmetric ciphers (e.g., for key exchange and digital signature).



The encrypted plaintext is called the <b>ciphertext or cryptogram</b> and the set of rules used to encrypt information plaintext is the encryption algorithm. Normally the operation of this algorithm depends on an <b>encryption key, which is input to the algorithm together with the message</b>. In order that the recipient can obtain the message from the cryptogram there has to be a decryption algorithm which, when used with the appropriate decryption key, reproduces the plaintext from the ciphertext.

<b>Key</b> – information that will allow someone to encipher the plaintext and also decipher the cipher text

![](https://rgssmaths.files.wordpress.com/2017/05/screen-shot-2017-06-01-at-2-54-34-pm.png?w=739)

Here we move the key through a different secure channel from the sender to the receiver. While, the encryption and the decryption functions are kept open to the public.

<i><b>Equations:</b></i>

Encryption equation y = eK(x)

Decryption equation x = dK(y)
Encryption and decryption are inverse operations if the same key K is used on both sides.

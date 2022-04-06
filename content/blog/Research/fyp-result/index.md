---
title: 'AI Composer: Image to Music Style Migration (Result Display)'
date: '2022-03-28'
type: Research
description: 'Final Year Project 结果展示'
cover: 'https://z3.ax1x.com/2021/11/29/oMWHA0.jpg'
---

This page is used to display the experimental results of FYP.

# Preliminary Results of Groove2Groove

## Attempt1: Direct Conversion

### Piano-Roll-Matrix Based Methods

#### Content Image Input

Album cover of《Amily》

![](Amily.jpeg)

#### Style Music Input

《Fantastic Voyage》, Lakeside, 1981

![](style.png)

<audio id="audio" controls="" preload="none">
  <source id="style" src="./style.mp3">
</audio>

#### Result: Find Closest + Groove2Groove

Conversion Result:

![](findCloset-MIDI.png)

<audio id="audio" controls="" preload="none">
  <source id="1" src="./1.mp3">
</audio>

Final Output:

![](findCloset-MIDI-output.png)

<audio id="audio" controls="" preload="none">
  <source id="1_o" src="./1_o.mp3">
</audio>

#### Result: Triad Mapping + Groove2Groove

Conversion Result:

![](triad-MIDI.png)

<audio id="audio" controls="" preload="none">
  <source id="2" src="./2.mp3">
</audio>

Final Output:

![](triad-output.png)

#### Result: Range of Various Instruments (RVI) + Groove2Groove

Conversion Result:

![](RVI-MIDI.png)

<audio id="audio" controls="" preload="none">
  <source id="3" src="./3.mp3">
</audio>

Final Output:

![](RVI-output-0.5.png)

<audio id="audio" controls="" preload="none">
  <source id="3_o" src="./3_o.mp3">
</audio>

#### Discussion: Duration -- crucial factor

Final Output of RVI (duration = 0.2s = style duration)

![](RVI-output-0.2.png)

<audio id="audio" controls="" preload="none">
  <source id="3_o_0.2" src="./3_o_0.2.mp3">
</audio>

Final Output of RVI (duration = 1s)

![](RVI-output-1.png)

<audio id="audio" controls="" preload="none">
  <source id="3_o_1" src="./3_o_1.mp3">
</audio>

Final Output of RVI (duration = 2s)

![](RVI-output-2.png)

<audio id="audio" controls="" preload="none">
  <source id="3_o_2" src="./3_o_2.mp3">
</audio>

### Color Based Methods

#### Content Input

Album cover of 《The Dark Side of the Moon》.

![](yzam.jpeg)

#### Style Input

《Fantastic Voyage》, Lakeside, 1981

![](style.png)

<audio id="audio" controls="" preload="none">
  <source id="style" src="./style.mp3">
</audio>

#### Result of Color + Chord Progress + Groove2Groove

Conversion Result:

![](colorcp.png)

<audio id="audio" controls="" preload="none">
  <source id="4" src="./4.mp3">
</audio>

Final Result:

![](colorcp-res.png)

<audio id="audio" controls="" preload="none">
  <source id="4_o" src="./4_o.mp3">
</audio>

## Attempt2: Content Extraction (BGT-G2G)

### Content Image Input

![](album.png)

### Style Input

#### Blues

![](Blues.png)

<audio id="audio" controls="" preload="none">
  <source id="Blues" src="./Blues.mp3">
</audio>

#### Country

![](Country.png)

<audio id="audio" controls="" preload="none">
  <source id="Country" src="./Country.mp3">
</audio>

#### Electronic

![](Electronic.png)

<audio id="audio" controls="" preload="none">
  <source id="Electronic" src="./Electronic.mp3">
</audio>

#### Jazz

![](Jazz.png)

<audio id="audio" controls="" preload="none">
  <source id="Jazz" src="./Jazz.mp3">
</audio>

### Result for 《Tang Dynasty》

#### Blues

![](Tang_Dynasty_Blues.png)

<audio id="audio" controls="" preload="none">
  <source id="唐朝__Blues" src="./1__Blues.mp3">
</audio>

#### Country

![](Tang_Dynasty_Country.png)

<audio id="audio" controls="" preload="none">
  <source id="唐朝__Country" src="./唐朝__Country.mp3">
</audio>

#### Electronic

![](Tang_Dynasty_Electronic.png)

<audio id="audio" controls="" preload="none">
  <source id="唐朝__Electronic" src="./唐朝__Electronic.mp3">
</audio>

#### Jazz

![](Tang_Dynasty_Jazz.png)

<audio id="audio" controls="" preload="none">
  <source id="唐朝__Jazz" src="./唐朝__Jazz.mp3">
</audio>

### Result for 《Love is a happy bullet》

#### Blues

![](2_Blues.png)

<audio id="audio" controls="" preload="none">
  <source id="在雨中__Blues" src="./在雨中__Blues.mp3">
</audio>

#### Country

![](2_Country.png)

<audio id="audio" controls="" preload="none">
  <source id="在雨中__Country" src="./在雨中__Country.mp3">
</audio>

#### Electronic

![](2_Electronic.png)

<audio id="audio" controls="" preload="none">
  <source id="在雨中__Electronic" src="./在雨中__Electronic.mp3">
</audio>

#### Jazz

![](2_Jazz.png)

<audio id="audio" controls="" preload="none">
  <source id="在雨中__Jazz" src="./在雨中__Jazz.mp3">
</audio>

### Result for《Amily》

#### Blues

![](3_Blues.png)

<audio id="audio" controls="" preload="none">
  <source id="Amily__Blues" src="./Amily__Blues.mp3">
</audio>

#### Country

![](3_Country.png)

<audio id="audio" controls="" preload="none">
  <source id="Amily__Country" src="./Amily__Country.mp3">
</audio>

#### Electronic

![](3_Electronic.png)

<audio id="audio" controls="" preload="none">
  <source id="Amily__Electronic" src="./Amily__Electronic.mp3">
</audio>

#### Jazz

![](3_Jazz.png)

<audio id="audio" controls="" preload="none">
  <source id="Amily__Jazz" src="./Amily__Jazz.mp3">
</audio>

### Result for 《Abbey Road》

#### Blues

![](4_Blues.png)

<audio id="audio" controls="" preload="none">
  <source id="Abbey-Road__Blues" src="./Abbey-Road__Blues.mp3">
</audio>

#### Country

![](4_Country.png)

<audio id="audio" controls="" preload="none">
  <source id="Abbey-Road__Country" src="./Abbey-Road__Country.mp3">
</audio>

#### Electronic

![](4_Electronic.png)

<audio id="audio" controls="" preload="none">
  <source id="Abbey-Road__Electronic" src="./Abbey-Road__Electronic.mp3">
</audio>

#### Jazz

![](4_Jazz.png)

<audio id="audio" controls="" preload="none">
  <source id="Abbey-Road__Jazz" src="./Abbey-Road__Jazz.mp3">
</audio>

### Result for 《The Dark Side of the Moon》

#### Blues

![](5_Blues.png)

<audio id="audio" controls="" preload="none">
  <source id="TDSOTM__Blues" src="./TDSOTM__Blues.mp3">
</audio>

#### Country

![](5_Country.png)

<audio id="audio" controls="" preload="none">
  <source id="TDSOTM__Country" src="./TDSOTM__Country.mp3">
</audio>

#### Electronic

![](5_Electronic.png)

<audio id="audio" controls="" preload="none">
  <source id="TDSOTM__Electronic" src="./TDSOTM__Electronic.mp3">
</audio>

#### Jazz

![](5_Jazz.png)

<audio id="audio" controls="" preload="none">
  <source id="TDSOTM__Jazz" src="./TDSOTM__Jazz.mp3">
</audio>

### Result for 《Bury the Hatchet》

#### Blues

![](6_Blues.png)

<audio id="audio" controls="" preload="none">
  <source id="bury-the-hatchet__Blues" src="./bury-the-hatchet__Blues.mp3">
</audio>

#### Country

![](6_Country.png)

<audio id="audio" controls="" preload="none">
  <source id="bury-the-hatchet__Country" src="./bury-the-hatchet__Country.mp3">
</audio>

#### Electronic

![](6_Electronic.png)

<audio id="audio" controls="" preload="none">
  <source id="bury-the-hatchet__Electronic" src="./bury-the-hatchet__Electronic.mp3">
</audio>

#### Jazz

![](6_Jazz.png)

<audio id="audio" controls="" preload="none">
  <source id="bury-the-hatchet__Jazz" src="./bury-the-hatchet__Jazz.mp3">
</audio>

## Appendix

### Video Resource of 《Amily》

<iframe width="560" height="315" src="https://www.youtube.com/embed/iVvkqHwX9Ds" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Video Resource of 《Fantastic Voyage》

<iframe width="560" height="315" src="https://www.youtube.com/embed/-1YjmXSyHa8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

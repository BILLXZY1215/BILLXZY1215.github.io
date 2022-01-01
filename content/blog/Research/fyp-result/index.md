---
title: "AI Composer: Image to Music Style Migration (Result Display)"
date: "2021-11-29"
type: Research
description: "Final Year Project 结果展示"
cover: "https://z3.ax1x.com/2021/11/29/oMWHA0.jpg"
---

This page is used to display the experimental results of FYP.

## Preliminary Result of Groove2Groove

### Content Image Input

Album cover of《Amily》

![](Amily.jpeg)

### Style Music Input

《Fantastic Voyage》, Lakeside, 1981

![](style.png)

<audio id="audio" controls="" preload="none">
  <source id="style" src="./style.mp3">
</audio>

### Result: Find Closest + Groove2Groove

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

### Result: Triad Mapping + Groove2Groove

Conversion Result:

![](triad-MIDI.png)

<audio id="audio" controls="" preload="none">
  <source id="2" src="./2.mp3">
</audio>

Final Output:

![](triad-output.png)

### Result: Range of Various Instruments (RVI) + Groove2Groove

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

### Discussion: Duration -- crucial factor

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

## Appendix

### Video Resource of 《Amily》

<iframe width="560" height="315" src="https://www.youtube.com/embed/iVvkqHwX9Ds" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

### Video Resource of 《Fantastic Voyage》

<iframe width="560" height="315" src="https://www.youtube.com/embed/-1YjmXSyHa8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
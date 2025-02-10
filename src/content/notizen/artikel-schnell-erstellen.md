---
date: 2025-02-12
icon: 11ty
tags:
    - 11ty
title: Artikel schnell erstellen
eleventyExcludeFromCollections: true
sources: 
    - title: Das Original
      url: https://deepakness.com/blog/create-posts-faster-11ty/
    - title: Bob Monsours Umsetzung
      url: https://github.com/bobmonsour/mkbo
---

Um einen neuen Artikel in Eleventy zu erstellen, muss man nicht nur eine neue Datei erzeugen, man muss auch das Frontmatter ausfüllen.

Ich habe mich glücklicherweise für eine einfache Struktur entschieden. Andere erstellen für jeden neuen Artikel einen gut benannten Ordner und packen dort eine ``index.md`` hinein. Egal welchen Weg man wählt, es ist ein wenig mühselig. Ich kann (und will) mir vor allem die wichtigen Bestandteile des Frontmatter nicht immer merken.

Glücklicherweise haben andere Menschen das gleiche Problem und finden dann auch eine Lösung. Bob Monsour stellte [eine interessante Lösung](https://github.com/bobmonsour/mkbo) auf Github zur Verfügung. Sie beruht auf einer Idee von DeepakNess, der sie [gut beschreibt](https://deepakness.com/blog/create-posts-faster-11ty/). Interessant ist hierbei aber auch das kurze Video im Artikel.

Beide Umsetzungen sind nicht exakt das von mir gesuchte. Aber ein paar kleine Anpassungen des Originalskripts haben mir eine sehr schöne Lösung gebracht. Jetzt kann ich mit ``node create.js neuer-artikel-titel`` eine neue Datei am richtigen Ort erstellen lassen, die auch schon einen vorausgefüllten Frontmatter hat. Prima Sache!
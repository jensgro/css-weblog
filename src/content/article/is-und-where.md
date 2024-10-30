---
title: Die Pseudoklassen is() und where()
date: 2024-11-01
tags:
    - css
    - selektoren
    - basics
source:
    - https://wiki.selfhtml.org/wiki/CSS/Eigenschaften/inset

---
Flexbox und CSS-Grid revolutionierten unseren Umgang mit dem Layout, schufen neue Möglichkeiten. Die Einführung der  drei Pseudoklassen ``:where()``, ``:is()`` und ``:has()`` packe ich in eine ähnliche Kategorie. Diese neuen Pseudoklassen können unsere Codebasis erheblich verschlanken und unseren Code lesbarer machen. Schauen wir uns die ersten beiden einmal in Beispielen an.

Früher schrieben wir beispielsweise:
{% highlight "css" %}
.teaser > header,
.teaser > footer,
.teaser > h2 {
	color: red;
}
{% endhighlight %}
Das geht jetzt folgendermassen kürzer:

{% highlight "css" %}
.teaser > :is(header, footer, h2) {
	color: red;
}
/* ==== oder ==== */
.teaser > :where(header, footer, h2) {
	color: red;
}
{% endhighlight %}

Das ist doch schon eine große Ecke lesbarer.

Beide Pseudoklassen werden prinzipiell identisch genutzt. Aber sie haben unterschiedliche Auswirkungen auf die Spezifität einer Regel. Die Pseudoklassen selber besitzen keine Spezifität. ``:where()`` setzt jegliche Spezifität innerhalb des Klammerausdrucks auf 0. Bei ``:is()`` wird die größte Spezifität innerhalb der Klammer genommen. Schauen wir uns ein Beispiel an:

{% highlight "css" %}
/* 0,1,1 */
ul[class] { color: red; }

/* 0,1,1 */
:is(ul[class]) { color: red; }

/* 0,0,0 */
:where(ul[class]) { color: red; }

/* ==== böser Trick :-) */
/* 1,0,0 */
:is(ul[class], #michGibtEsNicht) { color: red; }
{% endhighlight %}



{% highlight "css" %}

{% endhighlight %}



{% highlight "css" %}

{% endhighlight %}

{% highlight "css" %}

{% endhighlight %}


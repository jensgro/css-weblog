---
title: Die Pseudoklassen is() und where()
icon: css
date: 2025-02-11
tags:
    - css
    - selektoren
    - basics
sources:
    - title: the :where() and :is() pseudo-classes
      url: https://www.matuzo.at/blog/2022/100daysof-day13
    - title: The difference between :is() and :where()
      url: https://www.matuzo.at/blog/2022/100daysof-day14/
    - title: Codepen von Manuel
      url: https://codepen.io/matuzo/pen/abGVjop
    - title: Ein Codepen von mir
      url: https://codepen.io/jensgro/pen/jOjXjbg?editors=0100
    - title: Der :where-Selektor als Teil eines Base-CSS
      url: https://gist.github.com/jensgro/aacb7d941f68b1e8757627fbdbad662f
    - title: Sehr kompakte Schreibweise mit :is()
      url: https://codepen.io/jensgro/full/mdZgmXV

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

Weitere interessante Beispiele sind:

{% highlight "css" %}
:is(h1, h2, h3) {
	color: green;
}
:where(h1, h2, h3, h4, h5, h6) {
    text-wrap: balance;
    overflow-wrap: break-word;
}
:where(button) {
  all : unset;
}
{% endhighlight %}

{% baseline "is" %}
{% baseline "where" %}

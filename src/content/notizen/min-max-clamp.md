---
title: min(), max(), clamp() 
date: 2025-02-05
icon: css
sources: 
    - title: Codepen
      url: https://codepen.io/jensgro/pen/MWxxRBb
    - title: Artikel von Ahmad Shadeed über alle drei Funktionen
      url: https://ishadeed.com/article/css-min-max-clamp/
    - title: Codepen-Demo des Prinzips
      url: https://codepen.io/una/pen/bGpoGdJ
---

Die ``min()``-Funktion bildet den **minimalen** Wert aus einer Auswahl von zwei Werten ab.
{% highlight "css" %}
.my-box {
  width: min(50%, 500px);
}
{% endhighlight %}

**Der kleinste Wert** von beiden wird gewählt. Das Modul soll **maximal** 500px breit sein. Hier ist eine [Codepen-Demo des Prinzips](https://codepen.io/una/pen/rNeGNVL).


Die ``max()``-Funktion wählt den **maximalen** Wert aus einer Auswahl von zwei Werten.

{% highlight "css" %}
.my-box {
  width: max(50%, 500px);
}
{% endhighlight %}

**Der größere Wert** von beiden wird gewählt. Das Modul soll also **minimal** 500px breit sein.

Man kann es auch konfigurierbar und ein wenig schwer lesbar machen:

{% highlight "css" %}
:root {
    --container-max-width : 1728px;
}
.container {
    padding: 0 max(48px, calc((100% - var(--container-max-width)) / 2));
}
{% endhighlight %}

Ein [Codepen](https://codepen.io/una/pen/RwaZXqR) demonstriert das Prinzip.


Die ``clamp()``-Funktion vereint die beiden eben vorgestellten. Ich finde sie pfiffig, nützlich, aber nicht intuitiv nutzbar. Die beiden bisherigen Funktionen hatten zwei Werte. Die Funktion ``clamp()`` hat drei. Der erste Wert ist der Minimalwert, der dritte Wert der Maximalwert. Der mittlere Wert ist ein idealer Wert. Dieser Wert muss flexibel sein, damit diese Funktion einen Sinn hat. Hier können wir uns also experimentell mit relativen Werten austoben. Dabei sollten wir darauf achten, wie der mittlere Wert dazu beiträgt, dass zwischen den beiden extremen skaliert wird.

{% highlight "css" %}
/* clamp( minimum,  ideal,  maximum ) */
p {
    font-size: clamp(0.75rem, 3vw, 1.5rem);
}

.my-box {
  width: clamp(250px, 50%, 800px);
}
{% endhighlight %}

Wichtig ist, dass die Idealgröße die notwendige Flexibilität und Dynamik bringt. Hier kann und sollte man mit den unterschiedlichen relativen Einheiten experimentieren. Man kann mit ``vw`` einen Bezug zur Browserbreite machen, aber auch einfach nur schlichte Prozentwerte nehmen. Hier sollte man intensiv experimentieren.

{% baseline "min-max-clamp" %}
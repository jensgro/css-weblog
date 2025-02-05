---
title: Leichteres Positionieren mit CSS
date: 2024-11-10
icon: css
tags:
    - css
    - positionieren
    - basics
source:
    - url: https://wiki.selfhtml.org/wiki/CSS/Eigenschaften/inset
      title: SelfHTML

---
Wollten wir ein Element über die gesamte Seite ausdehnen und absolut positionieren, mussten wir bisher immer alle vier Himmelsrichtungen angeben. Das sah dann so aus:

{% highlight "css" %}
.test-1 {
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
}
{% endhighlight %}

Mittlerweile geht das auch wesentlich kürzer:

{% highlight "css" %}
.test-2 {
  position: absolute;
  inset: 0;
}
{% endhighlight %}

``inset`` ist ein Shorthand-Ausdruck und funktioniert analog zu ``margin``. Deshalb können wir auch gemischte Angaben machen:

{% highlight "css" %}
.test-3 {
  position: fixed;
  inset: 50px 0 0 20%;
}
{% endhighlight %}

{% baseline "inset" %}

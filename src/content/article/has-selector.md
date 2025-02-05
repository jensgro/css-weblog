---
title: Der neue :has()-Selektor
icon: css
date: 2025-02-02

tags:
    - css
sources:
    - title: Umfangreicher Artikel von Ahmad Shadeed
      url: https://ishadeed.com/article/css-has-parent-selector/
    - title: Codepen-Demo für das figure-Beispiel
      url: https://codepen.io/jensgro/pen/LYKvyXY
---
Mit dem ``has()``-Selektor bekommen wir endlich sowas ähnliches wie einen Parent-Selektor. 

Wir können nun bspw. ein Formular selektieren, in dem ein Eingabefeld fokussiert wurde oder das deaktivierte Eingabefelder besitzt.

{% highlight "css" %}
form:has(input:focused) {
  background-color: lightgrey;
}
:where(label:has(> input:disabled),
label:has(+ input:disabled)) {
  cursor : not-allowed;
}
{% endhighlight %}

Viele unterschiedliche Kombinationen sind mit diesem Selektor möglich.

{% highlight "css" %}
.card h2:has(+ p) {}

footer:has(.broadcastinfo) {}

a:has(.lead) {}

.media-liveblog:has(.topline) .topline:before {}
{% endhighlight %}

Sehr interessant ist auch die Möglichkeit, externe Styles in Abhängigkeit von Inline-Styles zu definieren:

{% highlight "css" %}
.teaser:has(.topline[style="display: none;"]) .hgroup a:before {}
{% endhighlight %}

Ode rnehmen wir als Beispiel ein Bild in einem ``figure``-Element. Es wird anders formatiert, wenn eine ``figcaption`` zusätzlich ausgegeben wird:

{% highlight "html" %}
<figure>
  <img src="thumb.jpg" alt="" />
  <figcaption>A great looking tart.</figcaption>
</figure>
{% endhighlight %}

{% highlight "css" %}
figure:has(figcaption) {
  padding: 0.5rem;
  background-color: #fff;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
{% endhighlight %}


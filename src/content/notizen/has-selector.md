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
Mit dem ``has()``-Selektor bekommen wir endlich sowas ähnliches wie einen Parent-Selektor. Es muss aber nicht als solcher benutzt werden. Ein Element wird durch die Bedingung innerhalb dieses neuen Selektors definiert. Wir können nun bspw. ein Formular selektieren, in dem ein Eingabefeld fokussiert wurde oder das deaktivierte Eingabefelder besitzt.

{% highlight "css" %}
form:has(input:focused) {
  background-color: lightgrey;
}
:where(label:has(> input:disabled),
label:has(+ input:disabled)) {
  cursor : not-allowed;
}
{% endhighlight %}

Viele unterschiedliche Kombinationen sind mit diesem Selektor möglich. So kann ich eine Headline selektieren, auf die direkt ein Absatz folgt und die sich in einem Konstrukt mit Klasse .card befindet.

{% highlight "css" %}
.card h2:has(+ p) {}
{% endhighlight %}

Oder einen Footer, der entweder eine Klasse .broadcastinfo hat oder ein Element mit dieser Klasse in sich hat.
{% highlight "css" %}
footer:has(.broadcastinfo) {}
{% endhighlight %}

Sehr interessant ist auch die Möglichkeit, externe Styles in Abhängigkeit von Inline-Styles zu definieren:

{% highlight "css" %}
.teaser:has(.topline[style="display: none;"]) .hgroup a:before {}
{% endhighlight %}

Oder nehmen wir als Beispiel ein Bild in einem ``figure``-Element. 

{% highlight "html" %}
<figure>
  <img src="thumb.jpg" alt="" />
  <figcaption>A great looking tart.</figcaption>
</figure>
{% endhighlight %}

Es wird mit Hilfe des ``has()``-Selektors anders formatiert, wenn eine ``figcaption`` zusätzlich ausgegeben wird:

{% highlight "css" %}
figure:has(figcaption) {
  padding: 0.5rem;
  background-color: #fff;
  box-shadow: 0 3px 10px 0 rgba(0, 0, 0, 0.1);
  border-radius: 8px;
}
{% endhighlight %}

{% baseline "has" %}

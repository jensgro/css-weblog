---
title: Texte kürzen
icon: css
date: 2025-02-01
tags:
    - css
source:
    - title: Codepen
      url: https://codepen.io/jensgro/pen/GRbEKPg
---
{% highlight "css" %}
p {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  line-height: 1.2;
  max-height: 3.6em;
}
{% endhighlight %}


Der Trick liegt in der Abhängigkeit von Anzahl der Zeilen, Zeilenhöhe und Maximalhöhe. Deshalb habe ich mir ein Sass-Mixin gebaut:

{% highlight "scss" %}
@mixin textclamp($num_of_lines: 1, $line_height: 1.2) {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;

  -webkit-line-clamp: $num_of_lines;
  line-height: $line_height;
  max-height: $line_height * $num_of_lines * 1em;
}

p {
  @include textclamp($num_of_lines: 5);
}
{% endhighlight %}




---
title: Strings in Nunjucks zusammenfassen
tags:
    - nunjucks
    - template
    - 11ty
sources:
    - https://github.com/11ty/eleventy/issues/297
    - https://michaelheap.com/nunjucks-concatenate-string/
---

Michael Heap [beschreibt](https://michaelheap.com/nunjucks-concatenate-string/), wie er in Nunjucks Strings zusammenfasst. Er setzt dafür eine Variable und fasst deren Bestandteile mit ``join`` zusammen:


{% highlight "js" %}
{% raw %}

{% set url = ["/bits/", data.slug] | join %}

{% endraw %}
{% endhighlight %}

In einem Github-Issue gibt es zwei weitere Vorschläge:

{% highlight "js" %}
{% raw %}

{% set canonical = config.baseUrl + page.url %}

{% endraw %}
{% endhighlight %}



{% highlight "js" %}
{% raw %}

{% set canonical %}
{{ config.baseUrl }}{{ page.url }}
{% endset %}

{% endraw %}
{% endhighlight %}


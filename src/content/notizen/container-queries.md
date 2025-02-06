---
title: Container Queries
icon: css
date: 2025-02-01
tags:
    - css
sources:
  - title: An Interactive Guide to CSS Container Queries
    url: https://ishadeed.com/article/css-container-query-guide/
  - title: A Friendly Introduction to Container Queries
    url: https://www.joshwcomeau.com/css/container-queries-introduction/
  - title: Container Queries - The inevitable end of mobile first
    url: https://beyond-the-cascade.com/the-inevitable-end-of-mobile-first/
---

Das Layout von Seitenelementen/Modulen ist bislang immer in Abhängigkeit von der Seitenbreite. Eigentlich sollte das Modul aber auf den unmittelbar verfügbaren Platz reagieren, nicht auf das Browserfenster.

Das geht jetzt mit Container Queries. Die gängigen Browser unterstützen alle diese Technik.

{% baseline "container-queries" %}

Der Bezugsrahmen wird vom Browserfenster auf eine frei definierbare Komponente einer Seite verschoben.

{% highlight "css" %}
.main {
  container-name: main;
  container-type: inline-size;
}

@container main (min-width: 370px) {
  .search-label,
  .filter-label {
    display: block;
  }
}
{% endhighlight %}


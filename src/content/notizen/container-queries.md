---
title: Container Queries
icon: css
date: 2025-02-01
tags:
    - css
---

Das Layout von Seitenelementen/Modulen ist bislang immer in Abhängigkeit von der Seitenbreite.
Eigentlich sollte das Modul aber auf den unmittelbar verfügbaren Platz reagieren, nicht auf das Browserfenster.

Das geht jetzt mit Container Queries.

[An Interactive Guide to CSS Container Queries](https://ishadeed.com/article/css-container-query-guide/)


Die gängigen Browser unterstützen alle diese Technik.

![Screenshot von Can I Use zu Container Queries](caniuse-container-queries.png)

[CanIUse](https://caniuse.com/css-container-queries)


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

{% baseline "container-query" %}

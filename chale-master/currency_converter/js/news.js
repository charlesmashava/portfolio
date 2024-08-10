// TradingView Widget Configuration
(function () {
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-timeline.js';
    script.async = true;
    script.onload = function () {
      new TradingView.widget({
        "container_id": "tradingview-widget-container",
        "width": 650,
        "height": 550,
        "locale": "en",
        "colorTheme": "dark",
        "displayMode": "regular",
        "isTransparent": false,
        "feedMode": "all_symbols"
      });
    };
    var scripts = document.getElementsByTagName('script')[0];
    scripts.parentNode.insertBefore(script, scripts);
  })();
  
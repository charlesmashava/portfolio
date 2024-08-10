const widgetConfig = {
  symbols: [
    ["Apple", "AAPL|1D"],
    ["Google", "GOOGL|1D"],
    ["Microsoft", "MSFT|1D"],
    ["BINANCE:BTCUSDT|ALL"],
    ["BINANCE:ETHUSDT|1D"],
    ["BITSTAMP:ETHUSD|1D"],
    ["COINBASE:SOLUSD|1D"],
    ["SP:SPX|1D"],
    ["OANDA:GBPUSD|1D"],
    ["FX:GBPUSD|1D"],
    ["FOREXCOM:GBPUSD|1D"],
    ["OANDA:GBPJPY|1D"],
    ["OANDA:AUDUSD|1D"],
    ["FOREXCOM:EURUSD|1D"],
    ["FX:AUDUSD|1D"],
    ["FX_IDC:PHPUSD|1D"],
    ["FX_IDC:PHPTHX|1D"],
    ["COINBASE:BTCUSD|1D"],
    ["NASDAQ:TSLA|1D"],
    ["NASDAQ:AAPL|1D"],
    ["NASDAQ:AMZN|1D"],
    ["NASDAQ:ABNB|1D"],
    ["TVC:EUBUND|1D"],
    ["FX_IDC:USDPHP|1D"]
  ],
  chartOnly: false,
  width: "100%",
  height: "100%",
  locale: "en",
  colorTheme: "dark",
  autosize: true,
  showVolume: false,
  showMA: false,
  hideDateRanges: false,
  hideMarketStatus: false,
  hideSymbolLogo: false,
  scalePosition: "right",
  scaleMode: "Normal",
  fontFamily: "-apple-system, BlinkMacSystemFont, Trebuchet MS, Roboto, Ubuntu, sans-serif",
  fontSize: "24",
  noTimeScale: false,
  valuesTracking: "2",
  changeMode: "price-and-percent",
  chartType: "candlesticks",
  maLineColor: "#2962FF",
  maLineWidth: 1,
  maLength: 9,
  lineType: 0,
  dateRanges: [
    "1d|1",
    "1m|30",
    "3m|60",
    "12m|1D",
    "60m|1W",
    "all|1M"
  ],
  upColor: "#22ab94",
  downColor: "#f7525f",
  borderUpColor: "#22ab94",
  borderDownColor: "#f7525f",
  wickUpColor: "#22ab94",
  wickDownColor: "#f7525f",
  allow_symbol_change: true  // Enable zooming
};

const scriptElement = document.createElement("script");
scriptElement.type = "text/javascript";
scriptElement.src = "https://s3.tradingview.com/external-embedding/embed-widget-symbol-overview.js";
scriptElement.async = true;
scriptElement.innerHTML = JSON.stringify(widgetConfig);

document.body.appendChild(scriptElement);
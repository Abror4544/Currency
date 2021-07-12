$(function () {
  let currency = $("#currency");
  let target = $("#target");
  let response = $("#response");
  let targetValue = "";

  $(target).change(function () {
    targetValue = this.value;
  });
  $.getJSON("https://www.cbr-xml-daily.ru/daily_json.js", function (item) {
    for (key in item.Valute) {
      currency.append('<option value="' + key + '">' + key + "</option>");
    }
    $(currency).change(function () {
      let nominal = item.Valute[this.value].Nominal;
      if ($(target).val() !== "") {
        responseValue = (targetValue * nominal) / item.Valute[this.value].Value;
        $(response).val(Math.floor(responseValue * 100) / 100);
      }
    });
    $(target).change(function () {
      $(response).val("");
    });
  });
});

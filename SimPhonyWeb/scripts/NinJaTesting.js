///<reference path="~/scripts/NinJa.js" />

var NinJaTesting = { FormStates: [], State: 0 }

NinJa.OnInitialization.Add(function () {
    var d1 = new Div("_testingdiv_").Style(Style.Display, "inline-block");
    d1.NaturalDisplay = "inline-block";
    var d2 = new Div().Style(Style.Position, "fixed").Style(Style.Bottom, "0px");
    var c = new DropDownList("_formstateslist_").Width(200);
    var a = Client.Storage.Local.GetItem("_formstates_");
    if (a) {
        NinJaTesting.FormStates = a;
        var l = a.length, v, i;
        for (i = 0; i < l; i++) {
            v = a[i];
            c.Options.Add(new Option(v, v));
        }
    }

    var b1 = new Button().Text("Save State");
    b1.OnClick.Add(NinJaTesting.SaveState);
    var b2 = new Button().Text("Load State");
    b2.OnClick.Add(NinJaTesting.LoadState);
    var b3 = new Button().Text("Delete State");
    b3.OnClick.Add(NinJaTesting.DeleteState);
    var b4 = new Button().Text("Clear State");
    b4.OnClick.Add(NinJaTesting.ClearState);
    var x = new Anchor("_testingtoggle_").Text("[<<]").Underline(false);
    x.OnClick.Add(NinJaTesting.Toggle);

    d1.AddElements([c, b1, b2, b3, b4]);
    d2.AddElements([x, d1]);
    Page.AddElement(d2);
});

NinJaTesting.Toggle = function () {
    if (NinJaTesting.State == 0) {
        NinJaTesting.State = 1;
        $Div("_testingdiv_").Collapsed(true);
        $Anchor("_testingtoggle_").Text("[>>]");
    }
    else {
        NinJaTesting.State = 0;
        $Div("_testingdiv_").Collapsed(false);
        $Anchor("_testingtoggle_").Text("[<<]");
    }

    Client.Storage.Local.SetItem("_teststate_", NinJaTesting.State);
}

NinJaTesting.SaveState = function () {
    var n = prompt("Name this form state.", "From " + DateTime.Now().ToString(true));
    var a = Array.From(document.querySelectorAll("input, textarea, select"));
    var d = new Dictionary();
    var l = a.length, i = 0, v;
    for (i; i < l; i++) {
        v = a[i];
        if (!v.id.StartsWith("_") && v.id.length > 0) {
            d[v.name] = $Input(v.id).Value();
        }
    }

    Client.Storage.Local.SetItem(n, d);
    NinJaTesting.FormStates.Add(n);
    Client.Storage.Local.SetItem("_formstates_", NinJaTesting.FormStates);
    $DropDownList("_formstateslist_").Options.Add(new Option(n, n));
};

NinJaTesting.LoadState = function () {
    var v = $DropDownList("_formstateslist_").SelectedValue();
    var d = Dictionary.FromObject(Client.Storage.Local.GetItem(v)), k = d.Keys(), l = k.length, i, v;
    for (i = 0; i < l; i++) {
        v = k[i];
        $Input(v).Value(d[v]);
    }
};

NinJaTesting.DeleteState = function () {
    var o = $DropDownList("_formstateslist_").SelectedOption(), v;
    if (o) {
        v = o.Value();
        if (confirm("Are you sure you want to remove this form state?")) {
            NinJaTesting.FormStates.Remove(v);
            Client.Storage.Local.RemoveItem(v);
            Client.Storage.Local.SetItem("_formstates_", NinJaTesting.FormStates);
            $DropDownList("_formstateslist_").Options.Remove(o);
        }
    }
};

NinJaTesting.ClearState = function () {
    var a = Array.From(document.querySelectorAll("input, textarea, select")), l = a.length, i, v;
    for (i = 0; i < l; i++) {
        v = a[i];
        if (v.id.length > 0 && !v.id.StartsWith("_")) {
            $Input(a[i].id).Clear();
        }
    }
};
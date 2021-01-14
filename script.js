function compute()
{
    var p = document.getElementById("principal").value;
    var i = document.getElementById("rate").value;
    var y = document.getElementById("years").value;

    // console.log(p);
    // console.log(i);
    // console.log(y);

    var si = p*(i/100)*y;

    var date = new Date().getFullYear();
    var d = date+parseInt(y);

    var res = document.getElementById('result');
    res.innerHTML = `<p>If you deposit <mark>${p}</mark>,
                    </p><p>at an interest rate of <mark>${i}%</mark>.</p>
                    <p>You will receive an amount of <mark>${si}</mark>,</p>
                    <p>in the year <mark>${d}</mark></p>`;
}



function handleInput() {
    var rate = document.getElementById('rate');
    var output = document.getElementById('demo');
    output.innerHTML = rate.value+"%";

    rate.oninput = function() {
    output.innerHTML = this.value+"%";
    }
}
        
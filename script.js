document.addEventListener("DOMContentLoaded", () => {

    const marital = document.getElementById("marital");
    const spouseField = document.getElementById("spouseField");

    function toggleSpouseField() {

        if (marital.value === "Single") {

            spouseField.style.display = "none";
            document.getElementById("spouse").value = "";

        } else {

            spouseField.style.display = "block";

        }
    }

    marital.addEventListener("change", toggleSpouseField);

    toggleSpouseField();

});

function sendWhatsApp() {

    const name = document.getElementById("name").value.trim();
    const mobile = document.getElementById("mobile").value.trim();
    const address = document.getElementById("address").value.trim();

    if (!name) {
        alert("Please enter Customer Name");
        return;
    }

    if (!mobile) {
        alert("Please enter Mobile Number");
        return;
    }

    if (!address) {
        alert("Please enter Current Address");
        return;
    }

    const btn = document.getElementById("sendBtn");

    btn.disabled = true;
    btn.innerText = "Opening WhatsApp...";

    const msg =

`👉🏻Customer Name: ${document.getElementById("name").value}


👉🏻Mobile No: ${document.getElementById("mobile").value}

👉🏻Mother Name: ${document.getElementById("mother").value}

👉🏻Married/Single: ${document.getElementById("marital").value}

👉🏻If Married Husband/Wife Name: ${document.getElementById("spouse").value}

👉🏻Current Address; At:- ${document.getElementById("address").value}

👉🏻Office Address: ${document.getElementById("officeAddress").value}

👉🏻Own/Rent: ${document.getElementById("ownership").value}

👉🏻Mail ID: ${document.getElementById("email").value}


👉🏻Two References

1 Name-- ${document.getElementById("ref1name").value}
  Mobile-- ${document.getElementById("ref1mob").value}
  Address-- ${document.getElementById("ref1addr").value}


2 Name-- ${document.getElementById("ref2name").value}
  Mobile-- ${document.getElementById("ref2mob").value}
  Address-- ${document.getElementById("ref2addr").value}
`;

    const whatsappUrl =
        "https://wa.me/919980169238?text=" +
        encodeURIComponent(msg);

    window.open(whatsappUrl, "_blank");

    setTimeout(() => {

        btn.disabled = false;
        btn.innerText = "Send to WhatsApp";

    }, 1500);
}

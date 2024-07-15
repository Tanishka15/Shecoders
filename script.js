const translations = {
    en: {
        knowYourBodyType: "Know Your Body Type",
        gender: "Gender",
        women: "Women",
        men: "Men",
        height: "Height (cm)",
        weight: "Weight (kg)",
        womenBust: "Bust (inches)",
        womenWaist: "Waist (inches)",
        womenHip: "Hip (inches)",
        menChest: "Chest (inches)",
        knowYourBodyTypeButton: "Know Your Body Type",
        styleRecommendations: "Style Recommendations",
        colorPreference: "Preferred Color",
        stylePreference: "Style Preference",
        itemPreference: "Item Preference",
        skirt: "Skirt",
        dress: "Dress",
        top: "Top",
        pants: "Pants",
        suit: "Suit",
        kurta: "Kurta",
        getRecommendationsButton: "Get Recommendations",
        influencerEndorsements: "Influencer Endorsements",
    },
    hi: {
        knowYourBodyType: "अपना शारीरिक प्रकार जानें",
        gender: "लिंग",
        women: "महिलाएं",
        men: "पुरुष",
        height: "ऊंचाई (सेमी)",
        weight: "वज़न (किग्रा)",
        womenBust: "बस्ट (इंच)",
        womenWaist: "कमर (इंच)",
        womenHip: "हिप (इंच)",
        menChest: "छाती (इंच)",
        knowYourBodyTypeButton: "अपना शारीरिक प्रकार जानें",
        styleRecommendations: "स्टाइल सिफारिशें",
        colorPreference: "पसंदीदा रंग",
        stylePreference: "शैली प्राथमिकता",
        itemPreference: "आइटम प्राथमिकता",
        skirt: "स्कर्ट",
        dress: "ड्रेस",
        top: "टॉप",
        pants: "पैंट्स",
        suit: "सूट",
        kurta: "कुर्ता",
        getRecommendationsButton: "सिफारिशें प्राप्त करें",
        influencerEndorsements: "प्रभावशाली समर्थन",
    },
    fr: {
        knowYourBodyType: "Connaître votre type de corps",
        gender: "Genre",
        women: "Femmes",
        men: "Hommes",
        height: "Taille (cm)",
        weight: "Poids (kg)",
        womenBust: "Buste (pouces)",
        womenWaist: "Taille (pouces)",
        womenHip: "Hanches (pouces)",
        menChest: "Poitrine (pouces)",
        knowYourBodyTypeButton: "Connaître votre type de corps",
        styleRecommendations: "Recommandations de style",
        colorPreference: "Couleur préférée",
        stylePreference: "Préférence de style",
        itemPreference: "Préférence d'article",
        skirt: "Jupe",
        dress: "Robe",
        top: "Haut",
        pants: "Pantalons",
        suit: "Costume",
        kurta: "Kurta",
        getRecommendationsButton: "Obtenir des recommandations",
        influencerEndorsements: "Approbations d'influenceurs",
    },
    es: {
        knowYourBodyType: "Conozca su tipo de cuerpo",
        gender: "Género",
        women: "Mujeres",
        men: "Hombres",
        height: "Altura (cm)",
        weight: "Peso (kg)",
        womenBust: "Busto (pulgadas)",
        womenWaist: "Cintura (pulgadas)",
        womenHip: "Cadera (pulgadas)",
        menChest: "Pecho (pulgadas)",
        knowYourBodyTypeButton: "Conozca su tipo de cuerpo",
        styleRecommendations: "Recomendaciones de estilo",
        colorPreference: "Color preferido",
        stylePreference: "Preferencia de estilo",
        itemPreference: "Preferencia de artículo",
        skirt: "Falda",
        dress: "Vestido",
        top: "Blusa",
        pants: "Pantalones",
        suit: "Traje",
        kurta: "Kurta",
        getRecommendationsButton: "Obtener recomendaciones",
        influencerEndorsements: "Endosos de influencers",
    },
};

function changeLanguage() {
    const language = document.getElementById("language").value;
    const elements = document.querySelectorAll("[data-translate]");

    elements.forEach(element => {
        const key = element.getAttribute("data-translate");
        element.textContent = translations[language][key];
    });
}

function changeGender() {
    const gender = document.getElementById("gender").value;
    document.getElementById("womenBodyTypeFields").style.display = (gender === "women") ? "block" : "none";
    document.getElementById("menBodyTypeFields").style.display = (gender === "men") ? "block" : "none";
}

/*function knowYourBodyType() {
    const gender = document.getElementById("gender").value;
    const height = parseFloat(document.getElementById("height").value);
    const weight = parseFloat(document.getElementById("weight").value);
    
    let bodyType = "";

    if (gender === "women") {
        const bust = parseFloat(document.getElementById("bust").value);
        const waist = parseFloat(document.getElementById("waist").value);
        const hip = parseFloat(document.getElementById("hip").value);
        
        const bustWaistDiff = bust - waist;
        const hipWaistDiff = hip - waist;

        if (bustWaistDiff < 4 && hipWaistDiff < 4) {
            bodyType = "Rectangle";
        } else if (bustWaistDiff > 4 && hipWaistDiff < 4) {
            bodyType = "Apple";
        } else if (bustWaistDiff < 4 && hipWaistDiff > 4) {
            bodyType = "Pear";
        } else {
            bodyType = "Hourglass";
        }
    } else if (gender === "men") {
        const chest = parseFloat(document.getElementById("chest").value);
        const waist = parseFloat(document.getElementById("waist").value);
        
        const chestWaistDiff = chest - waist;

        if (chestWaistDiff < 4) {
            bodyType = "Rectangle";
        } else if (chestWaistDiff >= 4 && chestWaistDiff < 6) {
            bodyType = "Inverted Triangle";
        } else {
            bodyType = "Triangle";
        }
    }

    document.getElementById("bodyTypeResult").innerHTML = Your body type is: ${bodyType};
}*/
function knowYourBodyType() {
    var height = document.getElementById('height').value;
    var weight = document.getElementById('weight').value;
    var gender = document.getElementById('gender').value;
    var bust = document.getElementById('bust').value;
    var waist = document.getElementById('waist').value;
    var hip = document.getElementById('hip').value;
    var chest = document.getElementById('chest').value;

    // Calculate BMI
    var heightInMeters = height / 100;
    var bmi = (weight / (heightInMeters * heightInMeters)).toFixed(2);

    // Determine body type (this is a simplified example, you may want to use more detailed logic)
    var bodyType = '';
    if (gender === 'women') {
        if (bust > hip && bust > waist) {
            bodyType = 'Inverted Triangle';
        } else if (hip > bust && hip > waist) {
            bodyType = 'Pear';
        } else {
            bodyType = 'Rectangle';
        }
    } else {
        if (chest > waist) {
            bodyType = 'Inverted Triangle';
        } else {
            bodyType = 'Rectangle';
        }
    }

    // Display the results
    document.getElementById('resultGender').innerText = gender.charAt(0).toUpperCase() + gender.slice(1);
    document.getElementById('resultHeight').innerText = height + ' cm';
    document.getElementById('resultWeight').innerText = weight + ' kg';

    if (gender === 'women') {
        document.getElementById('bustRow').style.display = '';
        document.getElementById('waistRow').style.display = '';
        document.getElementById('hipRow').style.display = '';
        document.getElementById('chestRow').style.display = 'none';

        document.getElementById('resultBust').innerText = bust + ' inches';
        document.getElementById('resultWaist').innerText = waist + ' inches';
        document.getElementById('resultHip').innerText = hip + ' inches';
    } else {
        document.getElementById('bustRow').style.display = 'none';
        document.getElementById('waistRow').style.display = 'none';
        document.getElementById('hipRow').style.display = 'none';
        document.getElementById('chestRow').style.display = '';

        document.getElementById('resultChest').innerText = chest + ' inches';
    }

    document.getElementById('bodyType').innerText = bodyType;
    document.getElementById('bmi').innerText = bmi;
}

/*function loadCSVFile(event) {
    const file = event.target.files[0];
    if (file) {
        Papa.parse(file, {
            header: true,
            complete: function(results) {
                console.log("Parsed CSV data:", results.data); // Check loaded data in console
                recommendations = results.data.reduce((acc, row) => {
                    const key = ${row.colorPreference.toLowerCase()}_${row.stylePreference.toLowerCase()}_${row.itemPreference.toLowerCase()};
                    if (!acc[key]) {
                        acc[key] = [];
                    }
                    acc[key].push({
                        imgSrc: row.imgSrc,
                        description: row.description,
                        influencer: row.influencer,
                    });
                    return acc;
                }, {});
            },
            error: function(error) {
                console.error("Error parsing CSV:", error);
            }
        });
    }
}*/

function recommendStyles() {
    const colorPreference = document.getElementById("color-preference").value.toLowerCase();
    const stylePreference = document.getElementById("style-preference").value.toLowerCase();
    const itemPreference = document.getElementById("item-preference").value.toLowerCase();
    
    const recommendations = {
        black_ethnic_skirt: [
            {
                imgSrc: "C:/Users/jssea/OneDrive/Pictures/black_skirt.jpg",
                description: "Black Ethnic Skirt with Golden Print",
                influencer: "Myntra Influencer 1",
                influencerPicture: "C:/Users/jssea/OneDrive/Pictures/influencer1.jpg"
            },
            {
                imgSrc: "C:/Users/jssea/OneDrive/Pictures/flowy_skirt.jpeg",
                description: "Flowy Black Ethnic Skirt",
                influencer: "Myntra Influencer 2",
                influencerPicture: "C:/Users/jssea/OneDrive/Pictures/influencer2.jpg"
            },
            {
                imgSrc: "C:/Users/jssea/OneDrive/Pictures/outfit_1.jpeg",
                description: "Black Skirt with Intricate Embroidery",
                influencer: "Myntra Influencer 3",
                influencerPicture: "C:/Users/jssea/OneDrive/Pictures/influencer3.jpg"
            },
            {
                imgSrc: "C:/Users/jssea/OneDrive/Pictures/outfit_2.jpeg",
                description: "Traditional Black Skirt with Silver Detailing",
                influencer: "Myntra Influencer 4",
                influencerPicture: "C:/Users/jssea/OneDrive/Pictures/influencer4.jpg"
            }
        ],
        pink_sporty_top: [
            {
                imgSrc: "C:/Users/jssea/OneDrive/Pictures/pink_top1.jpeg",
                description: "Trendy Pink Sporty Top",
                influencer: "Myntra Influencer 5",
                influencerPicture: "C:/Users/jssea/OneDrive/Pictures/influencer5.jpg"
            },
            {
                imgSrc: "C:/Users/jssea/OneDrive/Pictures/pink_top2.jpeg",
                description: "Casual Pink Sports Tee",
                influencer: "Myntra Influencer 6",
                influencerPicture: "C:/Users/jssea/OneDrive/Pictures/influencer6.jpg"
            }
        ],
        blue_casual_dress: [
            {
                imgSrc: "C:/Users/jssea/OneDrive/Pictures/blue_dress1.jpeg",
                description: "Cute Blue Casual Dress",
                influencer: "Myntra Influencer 7",
                influencerPicture: "C:/Users/jssea/OneDrive/Pictures/influencer7.jpg"
            },
            {
                imgSrc: "C:/Users/jssea/OneDrive/Pictures/blue_dress2.jpeg",
                description: "Stylish Blue Summer Dress",
                influencer: "Myntra Influencer 8",
                influencerPicture: "C:/Users/jssea/OneDrive/Pictures/influencer8.jpg"
            }
        ],
        green_formal_pants: [
            {
                imgSrc: "C:/Users/jssea/OneDrive/Pictures/green_pants1.jpeg",
                description: "Elegant Green Formal Pants",
                influencer: "Myntra Influencer 9",
                influencerPicture: "C:/Users/jssea/OneDrive/Pictures/influencer9.jpg"
            },
            {
                imgSrc: "C:/Users/jssea/OneDrive/Pictures/green_pants2.jpeg",
                description: "Smart Green Office Trousers",
                influencer: "Myntra Influencer 10",
                influencerPicture: "C:/Users/jssea/OneDrive/Pictures/influencer10.jpg"
            }
        ],
        yellow_boho_skirt: [
            {
                imgSrc: "C:/Users/jssea/OneDrive/Pictures/yellow_skirt1.jpeg",
                description: "Bright Yellow Boho Skirt",
                influencer: "Myntra Influencer 11",
                influencerPicture: "C:/Users/jssea/OneDrive/Pictures/influencer11.jpg"
            },
            {
                imgSrc: "C:/Users/jssea/OneDrive/Pictures/yellow_skirt2.jpeg",
                description: "Flowy Yellow Bohemian Skirt",
                influencer: "Myntra Influencer 12",
                influencerPicture: "C:/Users/jssea/OneDrive/Pictures/influencer12.jpg"
            }
        ],
        // Add more recommendations as needed
    };

    let key = `${colorPreference}_${stylePreference}_${itemPreference}`;
    const selectedRecommendations = recommendations[key];
    let recommendationHtml = "<table><thead><tr><th>Image</th><th>Description</th><th>Influencer</th><th>Influencer Picture</th></tr></thead><tbody>";

    if (selectedRecommendations) {
        selectedRecommendations.forEach(rec => {
            recommendationHtml += `<tr>
                <td><img src="${rec.imgSrc}" alt="${rec.description}" width="100"></td>
                <td>${rec.description}</td>
                <td>${rec.influencer}</td>
                <td><img src="${rec.influencerPicture}" alt="${rec.influencer}" width="100"></td>
            </tr>`;
        });
    } else {
        recommendationHtml += "<tr><td colspan='4'>No recommendations available.</td></tr>";
    }

    recommendationHtml += "</tbody></table>";
    document.getElementById("styleRecommendation").innerHTML = recommendationHtml;
}

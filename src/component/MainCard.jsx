import { useState } from "react";

const animalDetails = [
    {
        name: "Dog",
        scientificName: "Canis lupus familiaris",
        about: "A dog is a domestic mammal of the family Canidae (order Carnivora). It is a subspecies of the gray wolf and is related to foxes and jackals.",
        color: "white",
        img: "src/Images/images.jpg",
    },
    {
        name: "Cat",
        scientificName: "Felis catus",
        about: "A cat is a small, carnivorous mammal that is often kept as a pet. It belongs to the family Felidae and is valued for its companionship and ability to hunt rodents.",
        color: "white",
        img: "src/Images/cat.jpg",
    },
    {
        name: "Lion",
        scientificName: "Panthera leo",
        about: "A lion is a large carnivorous feline native to Africa and India. Known as the king of the jungle, it lives in social groups called prides and is a powerful predator.",
        color: "golden",
        img: "src/Images/loin.jpg",
    },
    {
        name: "Tiger",
        scientificName: "Panthera tigris",
        about: "A tiger is the largest cat species, recognizable by its pattern of dark vertical stripes on reddish-orange fur. It is a solitary predator found primarily in Asia.",
        color: "orange",
        img: "src/Images/tigher.jpg",
    },
    {
        name: "Cow",
        scientificName: "Bos taurus",
        about: "A cow is a domesticated mammal of the Bovidae family. It is primarily raised for milk, meat, and labor. Cows are herbivores and an integral part of agriculture.",
        color: "brown",
        img: "src/Images/cow.jpg",
    },
    {
        name: "Rabbit",
        scientificName: "Oryctolagus cuniculus",
        about: "A rabbit is a small, herbivorous mammal with long ears and a short tail. They are known for their rapid reproduction and are often kept as pets or farmed for their fur and meat.",
        color: "white",
        img: "src/Images/rabbit.jpg",
    },
];

const mainDivCard = {
    height: "35rem",
    width: "50rem",
    backgroundColor: "#dee2e6",
    borderRadius: "20px",
    padding: "1rem",
};

const childDivStyle = {
    height: "15rem",
    width: "100%",
    // border: "1px solid black ",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",

    // gap : "2rem"
};

const previousAnimalStyle = {
    height: "5rem",
    width: "5rem",
    // border: "1px solid black ",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const previousButton = {
    height: "5rem",
    width: "5rem",
    // border: "1px solid black ",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const mainImageDiv = {
    height: "10rem",
    width: "15rem",
    // border: "1px solid black ",
};

const nextAnimalStyle = {
    height: "5rem",
    width: "5rem",
    // border: "1px solid black ",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const nextButtonStyle = {
    height: "5rem",
    width: "5rem",
    // border: "1px solid black ",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
};

const child2DivStyle = {
    height: "20rem",
    width: "100%",
    // border: "1px solid black ",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
};

const imageDetailsStyle = {
    height: "15rem",
    width: "35rem",
    // border: "1px solid black ",
};

const btnStyle = {
    padding: "1rem",
    borderRadius: "20px",
    border: "none",
    backgroundColor: "#da77f2",
    fontSize: "1rem",
    color: "white",
    cursor: "pointer",
};

const img = {
    height: "100%",
    width: "100%",
    borderRadius: "10px",
};

function MainCard() {
    const [step, setStep] = useState(1);
    console.log(step);

    function minusStep() {
        if (step === 1) return;

        setStep(step - 1);
    }

    function plusStep() {
        if (step === animalDetails.length) return;
        setStep(step + 1);
    }

    return (
        <div style={mainDivCard}>
            <div style={childDivStyle}>
                <div style={previousAnimalStyle}>
                    <h2>
                        {" "}
                        {step > 1
                            ? animalDetails[step - 2].name
                            : "No previous Animals"}
                    </h2>
                </div>
                <div style={previousButton}>
                    <button style={btnStyle} onClick={minusStep}>
                        Previous
                    </button>
                </div>

                <div style={{ marginTop: "3rem" }}>
                    <div style={mainImageDiv}>
                        <img
                            src={animalDetails[step - 1].img}
                            alt=""
                            style={img}
                        />
                    </div>

                    <h1 style={{ textAlign: "center" }}>
                        {" "}
                        {animalDetails[step - 1].name}{" "}
                    </h1>
                </div>

                <div style={nextButtonStyle}>
                    {" "}
                    <button style={btnStyle} onClick={plusStep}>
                        Next
                    </button>
                </div>
                <div style={nextAnimalStyle}>
                    <h2>
                        {" "}
                        {step < animalDetails.length - 1
                            ? animalDetails[step + 1].name
                            : "No next Animals "}
                    </h2>
                </div>
            </div>

            <div style={child2DivStyle}>
                <h2>
                    <center>About Animals </center>
                </h2>
                <div style={imageDetailsStyle}>
                    <p>
                        <h3 style={{ display: "inline-block" }}>
                            Scientific Name :
                        </h3>
                        <span> {animalDetails[step - 1].scientificName} </span>{" "}
                    </p>

                    <p>
                        <h3 style={{ display: "inline-block" }}>color :</h3>
                        <span> {animalDetails[step - 1].color} </span>{" "}
                    </p>

                    <p>
                        <h3
                            style={{
                                display: "inline-block",
                                lineHeight: "10px",
                            }}
                        >
                            About :
                        </h3>
                        <span> {animalDetails[step - 1].about} </span>{" "}
                    </p>
                </div>
            </div>
        </div>
    );
}

export default MainCard;

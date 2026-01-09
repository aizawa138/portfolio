

function BubbleBackground() {

    const pictures = ["../assets/images/IMG_1099.jpg"];

    return (
        <div>
            {pictures.map(link, index => <img src={link} key={index} />)}
        </div>
    );

}

export default BubbleBackground
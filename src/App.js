import '../src/About.css'
import {useState} from "react";

const user = {
    name: "Hedy Lamarr",
    imageUrl: 'https://i.imgur.com/yXOvdOSs.jpg',
    imageSize: 90,
}

const products = [
    {title: 'Cabbage', id: 1, isFruit: false },
    {title: 'Garlic', id: 2, isFruit: true  },
    {title: 'Apple', id: 3, isFruit: false  },
]

const listItems = products.map(product =>
    // <li key={product.id}>{product.title}</li>
    <li
        key={product.id}
        style={{
            color: product.isFruit ? 'magenta' : 'darkgreen'
        }}
    >
        {product.title}
    </li>
)

function MyButton({ count, onClick }) {

    return (

        <div>
            <button onClick={onClick}>Clicked {count} times</button>
            {/*<ul>{listItems}</ul>*/}
        </div>
    );
}

function Profile() {
    return (
        <>
            <h1>{user.name}</h1>
            <img
                className="avatar"
                src={user.imageUrl}
                alt={'Photo of ' + user.name}
                style={{
                    width: user.imageSize,
                    height: user.imageSize
                }}
            />
        </>
    )
}


// Conditional Redenring
let content;
let isLoggedIn;
if (isLoggedIn) {
    content = <Profile />
} else {
    content = <MyButton />
}

export default function MyApp() {
    const [count, setCount] = useState(0);

    function handleClick() {
        // alert('You clicked me!');
        setCount(count + 1);
    }
    return (
        <div>
            <h1>Welcome to my app</h1>
            <MyButton count={count} onClick={handleClick} />
            <AboutPage />
            <MyButton count={count} onClick={handleClick} />

            <h1>
                {user.name}
            </h1>
            <p>
                {content}
            </p>
            <div>
                {isLoggedIn ? (
                    <MyButton />
                ) : (
                    <AboutPage />
                )}
            </div>
            <div>
                {isLoggedIn && <AboutPage />}
            </div>
        </div>
    );
}

function AboutPage() {
    return (
        <>
            <h1>About</h1>
            <img className="avatar" />
            <p className="avatar">Hello there. <br />How do you do?</p>
            <p>Hello</p>
        </>
    )
}
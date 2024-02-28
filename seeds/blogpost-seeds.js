const { Post } = require('../models');

const postData = [
    {
        title: "The Rise of Quantum Computing: Shaping the Future of Data Processing",
        content: "Quantum computing's potential to revolutionize data processing is becoming increasingly evident, with companies like IBM and Google making significant strides in this field.",
        user_id: 2
    },
    {
        title: "5G: Unleashing the Power of Hyperconnectivity",
        content: "LThe deployment of 5G networks promises lightning-fast speeds, ultra-low latency, and massive connectivity, laying the foundation for transformative technologies like autonomous vehicles and the Internet of Things (IoT).",
        user_id: 5
    },
    {
        title: "AI-Powered Healthcare: Enhancing Patient Care and Diagnosis Accuracy",
        content: "Artificial intelligence is revolutionizing healthcare by analyzing vast amounts of patient data to improve diagnostics, personalize treatment plans, and streamline administrative tasks, ultimately leading to better patient outcomes.",
        user_id: 3

    },
    {
        title:  "Blockchain Beyond Cryptocurrency: Transforming Industries with Decentralized Solutions",
        content: "Beyond cryptocurrency, blockchain technology is disrupting industries like supply chain management, finance, and even voting systems, offering transparent, secure, and tamper-proof solutions to age-old problems.",
        user_id: 4
    },
    {
        title: "Augmented Reality: Bridging the Gap Between Virtual and Physical Worlds",
        content: " Augmented reality is blurring the lines between the virtual and physical worlds, transforming how we interact with information, entertainment, and even our surroundings, opening up a realm of possibilities for education, gaming, and beyond.",
        user_id: 1
    }
]

const seedPosts = () => Post.bulkCreate(postData);

module.exports = seedPosts;
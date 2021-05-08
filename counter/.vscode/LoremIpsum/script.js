const text = [
    `Paragraph on Water: Water is the only molecule because of which life is possible on Earth. In outer space, the conditions are so hostile that Water cannot be found in its natural form- liquid. This liquid Water has been giving us sustenance throughout billions of years.`,
    `Water is the basic need of every life form on Earth. It is Water that helps us to lead a comfortable life on this planet. Our bodies are made up of 70% water, which is why Water is such an important compound for us. We use Water for so many purposes. We need water for drinking, cooking, bathing, and cleaning. Without Water, life would be impossible on the planet. Water is found on the Earth in the form of rivers, oceans, seas, ponds, lakes, streams, and glaciers. The composition of Water remains the same throughout the Earth.`,
    `Water is the most important liquid for all living forms. It is not only necessary for our life processes but is also required for the functioning of our planet. Water is available in 3 states on the Earth- solid, liquid, and gaseous. Solid-state includes glaciers, snow caps, ice sheets, and polar ice reserves. The liquid state includes rivers, seas, lakes, ponds, streams, oceans, and geysers. The gaseous state includes water vapor found in the atmosphere. No matter which state it is in, the composition of Water remains the same throughout. It is a powerful compound that nurtures all the life present on Earth. Plants require water for photosynthesis and respiration. Humans require water for many different life processes like circulation, digestion, respiration, and excretion, without Water, life would be impossible on Earth. As it is such an important compound, we must make sure that we conserve it so that it won’t get exhausted soon.`,
    `Water is the most important liquid for all living forms. It is not only necessary for our life processes but is also required for the functioning of our planet. Water is available in 3 states on the Earth- solid, liquid, and gaseous. Solid-state includes glaciers, snow caps, ice sheets, and polar ice reserves. The liquid state includes rivers, seas, lakes, ponds, streams, oceans, and geysers. The gaseous state includes water vapor found in the atmosphere. No matter which state it is in, the composition of Water remains the same throughout. It is a powerful compound that nurtures all the life present on Earth. Plants require water for photosynthesis and respiration. Humans require water for many different life processes like circulation, digestion, respiration, and excretion, without Water, life would be impossible on Earth. As it is such an important compound, we must make sure that we conserve it so that it won’t get exhausted soon.`,
    `Water is the most important liquid for all living forms. It is not only necessary for our life processes but is also required for the functioning of our planet. Water is available in 3 states on the Earth- solid, liquid, and gaseous. Solid-state includes glaciers, snow caps, ice sheets, and polar ice reserves. The liquid state includes rivers, seas, lakes, ponds, streams, oceans, and geysers. The gaseous state includes water vapor found in the atmosphere. No matter which state it is in, the composition of Water remains the same throughout. It is a powerful compound that nurtures all the life present on Earth. Plants require water for photosynthesis and respiration. Humans require water for many different life processes like circulation, digestion, respiration, and excretion, without Water, life would be impossible on Earth. As it is such an important compound, we must make sure that we conserve it so that it won’t get exhausted soon.`,
]

const buttpn =document.querySelector('button');
const div = document.querySelector('div');

buttpn.addEventListener('click',()=>
{
    const lenth = div.querySelectorAll('p').length;
    console.log(div.querySelectorAll('p').length)
    for(let j=0;j< lenth;j++)
    {
        div.removeChild(div.querySelector('p'));
    }
    const input = document.querySelector('input').value;
    for(let i = 0; i< input ;i++)
    {
        const p =document.createElement('p');
        p.innerHTML = `${text[i]}`;
        div.appendChild(p);
    }
});
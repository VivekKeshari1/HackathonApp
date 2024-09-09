import React, { useEffect } from 'react'
import { Card, CardContent, Typography, Grid } from '@mui/material'
import { Link } from 'react-router-dom';

function Cards(props) {

    const cardDetailsDefault = [
        {
            "id": 11,
            "title": "Data Science Bootcamp - Graded Datathon",
            "image": "../images/image1.png",
            "favourite": false,
            "summary": "Data Sprint 72 - Butterfly Identification",
            "description": `Identify the class to which each butterfly belongs to`,
            "hackathonName": "Data Sprint 72 - Butterfly Identification",
            "startDate": "2024-09-06",
            "endDate": "2024-09-10",
            "date": "uploaded 6 days ago"
        },
        {
            "id": 12,
            "title": "Lorem ipsum",
            "image": "../images/image2.png",
            "favourite": false,
            "summary": "Identify the class to which each butterfly belongs to",
            "description": `Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows. An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model. Your Task is to build an Image Classification Model using CNN that classifies to which class of weather each image belongs to.`,
            "hackathonName": "Prestige Interview Challenge",
            "startDate": "2024-10-26",
            "endDate": "2024-11-26",
            "date": "uploaded 8 days ago"
        },
        {
            "id": 13,
            "title": "Potter ipsum",
            "image": "../images/Potter ipsum.png",
            "favourite": false,
            "summary": "Identify the class to which each butterfly belongs to",
            "description": `Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows. An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model. Your Task is to build an Image Classification Model using CNN that classifies to which class of weather each image belongs to.`,
            "hackathonName": "Prestige Interview Challenge",
            "startDate": "2024-10-15",
            "endDate": "2024-10-20",
            "date": "uploaded 9 days ago"
        },
        {
            "id": 14,
            "title": "Pizza Impsum",
            "image": "../images/Pizza Ipsum.png",
            "favourite": false,
            "summary": "Identify the class to which each butterfly belongs to",
            "description": `Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows. An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model. Your Task is to build an Image Classification Model using CNN that classifies to which class of weather each image belongs to.`,
            "hackathonName": "Prestige Interview Challenge",
            "startDate": "2024-11-16",
            "endDate": "2024-11-20",
            "date": "uploaded 12 days ago"
        },
        {
            "id": 15,
            "title": "Figma Ipsum",
            "image": "../images/Figma ipsum.png",
            "favourite": false,
            "summary": "Identify the class to which each butterfly belongs to",
            "description": `Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows. An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model. Your Task is to build an Image Classification Model using CNN that classifies to which class of weather each image belongs to.`,
            "hackathonName": "Prestige Interview Challenge",
            "startDate": "2024-11-23",
            "endDate": "2024-11-26",
            "date": "uploaded 16 days ago"
        },
        {
            "id": 16,
            "title": "Office Ipsum",
            "image": "../images/Office ipsum.png",
            "summary": "Office ipsum you must be muted.",
            "favourite": false,
            "summary": "Identify the class to which each butterfly belongs to",
            "description": `Butterflies are the adult flying stage of certain insects belonging to an order or group called Lepidoptera. The word "Lepidoptera" means "scaly wings" in Greek. This name perfectly suits the insects in this group because their wings are covered with thousands of tiny scales overlapping in rows. An agency of the Governmental Wildlife Conservation is planning to implement an automated system based on computer vision so that it can identify butterflies based on captured images. As a consultant for this project, you are responsible for developing an efficient model. Your Task is to build an Image Classification Model using CNN that classifies to which class of weather each image belongs to.`,
            "hackathonName": "Prestige Interview Challenge",
            "startDate": "2024-12-28",
            "endDate": "2024-12-30",
            "date": "uploaded 28 days ago"
        },
    ]

    useEffect(() => {
        if (!localStorage.getItem('cardDetails'))
            localStorage.setItem('cardDetails', JSON.stringify(cardDetailsDefault));
    })

    let cardDetails = JSON.parse(localStorage.getItem('cardDetails')) || cardDetailsDefault;

    if (props.card === "fav") {
        cardDetails = cardDetails.filter((card) => card.favourite === true);
        console.log(cardDetails);
    }

    if (props.card === "Oldest") {
        cardDetails.sort((a, b) => b.id - a.id);
    } else {
        cardDetails.sort((a, b) => a.id - b.id);
    }

    if (props.search) {
        console.log(props.search);
        cardDetails = cardDetails.filter((card) => card.title.toLowerCase().includes(props.search.toLowerCase()));
    }

    return (
        <div className="mt-12">
            <Grid container spacing={4}>
                {cardDetails.map((cardDetail) => (
                    <Grid item key={cardDetail.id} xs={12} sm={6} md={4}>
                        <Link to={`/card-details/${cardDetail.id}`}>
                            <Card className="h-full flex flex-col rounded-2xl">
                                <div className="flex items-center p-4">
                                    <img className="w-28 h-24 rounded-lg" src={cardDetail.image} alt={cardDetail.title} />
                                    <CardContent className="grow">
                                        <Typography varient="h4" gutterBottom>
                                            <p className='font-semibold'>{cardDetail.title}</p>
                                        </Typography>
                                    </CardContent>
                                </div>
                                <CardContent>
                                    <Typography>
                                        <p className='text-sm'>{cardDetail.summary}</p>
                                    </Typography>
                                    <Typography className='flex justify-end py-4'>
                                        <p className='text-xs'>{cardDetail.date}</p>
                                    </Typography>
                                </CardContent>
                            </Card>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}

export default Cards

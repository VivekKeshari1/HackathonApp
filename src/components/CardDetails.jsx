import React, { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { Container, CssBaseline, Typography } from '@mui/material'
import ModalComponent from './ModalComponent';
import { ReactComponent as Star } from '../images/Star.svg'
import { ReactComponent as FilledStar } from '../images/Filledstar.svg'
import { ReactComponent as Edit } from '../images/Edit.svg'
import { ReactComponent as Delete } from '../images/Delete.svg'
import { ReactComponent as Calendar } from '../images/Calendar.svg'

function CardDetails() {

    const { id } = useParams();
    const cardDetails = JSON.parse(localStorage.getItem('cardDetails')).filter((cardDetail) => cardDetail.id.toString() === id)[0];
    // console.log(cardDetails);
    console.log(cardDetails.gitHub)

    const [openModal, setOpenModal] = useState(false);
    const [liked, setLiked] = useState(cardDetails.favourite);

    const onDelete = () => {
        setOpenModal(true);
    }

    const onLiked = () => {
        setLiked(!liked);

        const allCardDetails = JSON.parse(localStorage.getItem('cardDetails'));
        const card = allCardDetails.filter((card) => card.id.toString() === id)[0];
        const otherCards = allCardDetails.filter((card) => card.id.toString() !== id);
        //console.log("card details : ", cardDetails);
        card.favourite = !liked;
        //console.log("After Liked : ", cardDetails.favourite);
        localStorage.setItem('cardDetails', JSON.stringify([
            card,
            ...otherCards
        ]))
    }

    return (
        <div>
            <CssBaseline />
            <main>
                {openModal && <ModalComponent open={setOpenModal} id={id} />}
                <div className="md:flex w-full bg-[#003145] md:p-16 md:justify-between">
                    <div className="text-white md:w-[80%] p-4" >
                        <div className='mb-2 md:flex items-center'>
                            <img src={cardDetails.image}
                                className="md:w-[120px] rounded-md" alt="uploded-img" />
                            <h2 className="text-4xl font-bold ml-8">{cardDetails.title}</h2>
                        </div>
                        <div className='my-8'>
                            <p className="text-sm">{cardDetails.summary}</p>
                        </div>
                        <div className='flex'>
                            <div onClick={onLiked}
                                className="border-r border-gray-600 pr-4 mr-4">{liked ? <FilledStar /> : <Star />}</div>
                            <div>
                                <input type="date"
                                    className='bg-[#255973] rounded-xl text-white px-2'
                                    value={cardDetails.startDate} />
                            </div>
                        </div>
                    </div>
                    <div className="md:w-[20%] flex md:flex-col justify-between md:justify-start px-4 md:px-0">
                        <Link to={`/submission/${id}`}>
                            <button className='bg-[#003145] my-4 min-w-[110px] text-white px-4 py-1 border border-white rounded-md'>
                                <div className='flex'>
                                    <Edit className='mx-2' />
                                    <p>Edit</p>
                                </div>
                            </button>
                        </Link>
                        <div>
                            <button className='bg-[#003145] my-4 min-w-[110px] text-white px-4 py-1 border border-white rounded-md'
                                onClick={onDelete} >
                                <div className='flex'>
                                    <Delete className='mx-2' />
                                    <p>Delete</p>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
                <div className='md:px-40 py-20 flex flex-col-reverse md:flex-row w-full'>
                    <Container className='py-4'>
                        <Typography variant='h4' gutterBottom>
                            Description
                        </Typography>
                        <Typography paragraph>
                            <p>{cardDetails.description}</p>
                        </Typography>
                    </Container>
                    <Container className='!w-auto'>
                        <div>
                            <Typography>
                                <p>Hackathon</p>
                            </Typography>
                            <Typography variant='h5' gutterBottom>
                                {cardDetails.title}
                            </Typography>
                            <Typography paragraph>
                                <p className='flex'><Calendar className='mr-2' />{cardDetails.startDate} - {cardDetails.endDate}</p>
                            </Typography>
                        </div>
                    </Container>
                </div>
            </main>
        </div>
    )
}

export default CardDetails

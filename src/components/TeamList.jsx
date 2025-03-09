import React from 'react'
import './css/TeamList.css'

function TeamList() {
    const personData = ([
        {
            name: 'Daryna Deriy',
            image: '/62744ee9fce7fbaf400c22f8_2.jpg',
            role: 'Chairman of the Board'
        },
        {
            name: 'Polina Snisarenko-Kulchytska',
            image: '/62744edaac91b4183ac27e10_5.jpg',
            role: 'Curator of the Foundation'
        },
        {
            name: 'Bohdan Kulchytsky',
            image: '/62744ec97586a996f48f7a85_1.jpg',
            role: 'Executive Manager'
        },
        {
            name: 'Mykhaylo Deriy',
            image: '/62744eae22e10d8a15f909ef_9-p-500.jpeg',
            role: 'Operation Manage'
        },
        {
            name: 'Ksenia Nikishina',
            image: '/62744e8e05f6c22bac85252a_7.jpg',
            role: 'Office Manager'
        },
        {
            name: 'Anna Andriychuk',
            image: '/62744f0eb7cd3462ef475ebf_6.jpg',
            role: 'SMM-Manager'
        },
        {
            name: 'Anastasia Kovalchuk',
            image: '/62744e6761e425c6956af3a5_3.jpg',
            role: 'Director'
        },
        {
            name: 'Basil Gloo',
            image: '/626ae0bcd92bf48017c14083_basil-square.png',
            role: 'Web Developer'
        }, {
            name: 'Lina Yakobchuk',
            image: '/626ae01da2a805d176b1606b_1.jpg',
            role: 'Designer'
        },
        {
            name: 'Anastasia Yevchenko',
            image: '/627fc796cf3602b53a7512cf_4.jpg',
            role: 'SMM-Manager'
        },
        {
            name: 'Office Manager',
            image: '/6265332e63b917130ca8d702_isa-logo-dog-clean.svg',
            role: 'open vacancy'
        },
        {
            name: 'SEO specialist',
            image: '/627fc81139e6f5dca2d02054_isa-logo-cat-clean.svg',
            role: 'open vacancy'
        }
    ])
    return (
        <div>
            <div className='container'>
                <div className='text-content'>
                    <h2>Our team</h2>
                    <p>consists of completely different people who are united by a common desire - to help</p>
                </div>
                <div className='people-list'>
                    {personData.map((data) => {
                        return (
                            <>
                                <div className='people-info-wrap'>
                                    <div className='people-info-content'>
                                        <img src={data.image} alt="" />
                                        <h2>{data.name}</h2>
                                        <p>{data.role}</p>
                                    </div>
                                </div>
                            </>
                        );
                    })}
                </div>
            </div>
        </div>
    )
}

export default TeamList

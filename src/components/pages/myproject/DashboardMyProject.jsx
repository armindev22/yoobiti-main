import React from 'react'
import MyProjectCard from './MyProjectCard'
import AddButton from '../../common/Button/AddButton'
import { useHistory } from 'react-router-dom'

const DashboardMyProject = () => {
    const history = useHistory()
    const handleButton = () => {
        history.push('/dashboard/addproject')
    }
    return (
        <div>
            <div className="w-full flex justify-end ">
                <div className="mb-5">
                    <AddButton title="add project" handleButton={handleButton} />
                </div>
            </div>
            <div className=" bg-white rounded-[20px] py-3 px-6" style={{
                boxShadow: ' 0px 0px 50px 0px rgba(0, 0, 0, 0.05)'
            }}>
                <p className='text-primary-20 text-h7 capitalize font-medium'>my projects</p>
                <hr className="border-2 border-surface-20 w-full my-3" />
                <MyProjectCard />
            </div>

        </div>
    )
}

export default DashboardMyProject
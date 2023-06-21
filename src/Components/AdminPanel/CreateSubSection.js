import React, {useState} from 'react'

const CreateSubSection = ({ sectionNumber, sectionHeading, sectionContent }) => {
    const [openSubSectionDiv, setOpenSubSectionDiv] = useState(false)

    const handleOpenSubSection = () => {
        setOpenSubSectionDiv(!openSubSectionDiv)
    }
    return (
  
        <div>
            <div onClick={handleOpenSubSection} style={{
                cursor: 'pointer', fontSize: '20px'
            }}>
                {sectionNumber} {sectionHeading} {sectionContent}
            </div>
            {openSubSectionDiv && (
                <div style={{ height: '100px' }}>
                </div>
            )}
        </div>
    )
}

export default CreateSubSection

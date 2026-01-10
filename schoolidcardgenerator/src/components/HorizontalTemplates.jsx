import IDCard from './IDCard'

export default function HorizontalTemplates({selectedPerson,setSelectedTemplates}){
    const theme = ['theme1','theme2', 'theme3'];

    return(
        <>
          {theme.map((themenumber,index)=>(
            <IDCard
           key={index} 
           selectedPerson={selectedPerson}
           orientation="horizontal"
           theme={themenumber}
           setSelectedTemplates={setSelectedTemplates}
           isPrintable={true}
           />))}  
        </>
    )
}
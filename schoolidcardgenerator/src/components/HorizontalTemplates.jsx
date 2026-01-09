import IDCard from './IDCard'
export default function HorizontalTemplates({selectedPerson}){

    return(
        <>
          <IDCard selectedPerson={selectedPerson}
          orientation="horizontal"
          theme="theme1"/>  
          <IDCard selectedPerson={selectedPerson}
          orientation="horizontal"
          theme="theme2"/>  
          <IDCard selectedPerson={selectedPerson}
          orientation="horizontal"
          theme="theme3"/>  
        </>
    )
}
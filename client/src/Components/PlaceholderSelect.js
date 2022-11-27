const PlaceholderSelect = ({placeholders}) => {
    
    const placeholderSelect = placeholders.map(placeholder => {
        return (
            <div key ={placeholder._id}>
                
                {placeholder.word}

            </div>
        )
    }) 
    
    return ( 
    <>       
     <h1>Placeholder Select</h1>
        {placeholderSelect}
        </>

     );
}

 
export default PlaceholderSelect;
import './castdata.css';

export default function CastData({data}) {

    
    return (
        <div className="castData">
            <div className="castDataWrapper">
                <table cellPadding={0} cellSpacing={0}>
                    <thead>
                        <tr>
                            <th>Sno</th>
                            <th>Name</th>
                            <th>Occupation</th>
                            <th>Date of Birth</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <hr />
                    <hr />
                    <tbody>
                        {data.map(value=>
                                <tr>
                                    {<>
                                        
                                        <td>
                                            {value.char_id}
                                        </td>
                                        <td>
                                            {value.name}
                                        </td>
                                        <td>
                                            {value.occupation}
                                        </td>
                                        <td>
                                            {value.birthday}
                                        </td>
                                        <td>
                                            {value.status}
                                        </td>
                                    </>
                                    }
                                </tr>
                            )}
                    </tbody>
                </table>
            </div>
        </div>
    )
}

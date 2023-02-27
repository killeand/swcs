import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import DataContext from '../components/DataContext';
import Text from '../components/Text';
import List from '../components/List';
import Select from '../components/Select';
import _ from 'lodash';
import '../styles/Page.css';

export default function Details() {
    //##### OPENING COMMON PAGE BLOCK FOR API ACCESS #####//
    const DC = useContext(DataContext);
    const Nav = useNavigate();
    const [charIndex, setCharIndex] = useState(-1);

    function GetAPI(path) {
        return _.get(DC.files[charIndex].data.details, path);
    }

    function SetAPI(path, value) {
        let newObj = {};
        newObj[path] = value;
        _.assign(DC.files[charIndex].data.details, newObj);
        DC.files[charIndex].saved = false;
    }

    useEffect(() => {
        let tempIndex = DC.getLoadedIndex();

        if (tempIndex == -1) {
            Nav("/");
            return;
        }

        if (!_.has(DC.files[tempIndex], "data.details")) {
            _.assign(DC.files[tempIndex].data, {
                details: {
                    name: "",
                    gender: "",
                    race: "",
                    languages: []
                }
            });
        }

        setCharIndex(tempIndex);

        // Enter Page Specific Code Here //

        // Enter Page Specific Code Here //
    }, []);
    //##### CLOSING COMMON PAGE BLOCK FOR API ACCESS #####//

    if (charIndex == -1)
        return (<p>Loading...</p>);
    
    return (
        <>
            <h1>Character Details</h1>
            <div className="main-container">
                <Text title="Name" id="name" value={GetAPI("name")} onChange={retval => SetAPI("name", retval)} />
                <Text title="Gender" id="gender" value={GetAPI("gender")} onChange={retval => SetAPI("gender", retval)} />
                <Select title="Race" id="race" value={GetAPI("race")} items={["Human","Half-folk","Dwarf","Elf","Half-orc","Half-elf"]} onChange={retval => SetAPI("race", retval)} />
                <List title="Languages" id="languages" value={GetAPI("languages")} onChange={retval=>SetAPI("languages",retval)} />
            </div>
        </>
    );
}
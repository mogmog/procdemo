import React from 'react'
import ProceduralMap from 'procedural-gl-react';

const datasource = {
    elevation: {
        apiKey: '1b045ec93f5b94db894037db8d297128e'
    },
    imagery: {
        urlFormat: 'https://api.maptiler.com/tiles/satellite/{z}/{x}/{y}.jpg?key=cZQg2QaktSnI18BSAxZX',
        attribution: '<a href="https://www.maptiler.com/copyright/">Maptiler</a> <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }
}

export default class ProceduralComponent extends React.Component {
    constructor(props) {
        super(props);
        this.myRef = React.createRef();
    }

    render() {
        return (
            <div className="Map">
                <ProceduralMap
                    ref={this.myRef}
                    datasource={datasource}
                    compassVisible={false}
                    displayLocation={this.props.location}
                />
            </div>
        );
    }
}


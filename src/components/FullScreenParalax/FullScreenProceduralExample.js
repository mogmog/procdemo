import React, {useState} from 'react';
import Procedural from '../Procedural';
import FullScreenParallax from './index';

const _renderItem = (itemData) => {
    if (itemData.type === 'withButton') {
        return (
            <div>
                <p style={{ fontSize: '24px', lineHeight: 1.5 }}>
                    {itemData.text}
                </p>
                <button
                    style={{
                        borderRadius: '32',
                        padding: '12px 24px',
                        backgroundColor: 'transparent',
                        color: '#fff',
                        fontSize: '16px',
                        fontWeight: 700,
                        border: '1px solid #fff',
                        outline: 'none'
                    }}
                >
                    Watch HD Video
                </button>
            </div>
        );
    }

    return (
        <h1 style={{ fontSize: '48px', fontWeight: 700 }}>
            {itemData.text}
        </h1>
    );
}

function FullScreenProceduralExample() {

    const [location, setLocation] = useState({
        animationDuration : 2,
        longitude: 7.698941573782926,
        latitude: 45.74338484004915,
        height: 2183.358398660126,
        angle: 36.11883143607126,
        bearing: 70.35532994923864
    });

    return (
        <FullScreenParallax
            mediaComponent={(
                <Procedural
                    location={location}
                />
            )}
            data={[
                { text: 'Get out there.', type: 'text', longitude : 7.698941573782926, },
                { longitude : 7.798941573782926, text: 'So many mountains.', type: 'text' },
                { longitude : 7.858941573782926, text: 'So much time.', type: 'text' },
            ]}
            renderItem={_renderItem}
            onEnterItem={(data) => {
              setLocation({...location, longitude: data.longitude})
            }}
            texts={[
                <h1 style={{ fontSize: '48px', fontWeight: 700 }}>
                    Get results that match the intensity of your flights.
                </h1>,
                <div>
                    <p style={{ fontSize: '24px', lineHeight: 1.5 }}>
                        Powerful propulsion capabilities combined with a 150° super-wide
                        FOV provide an unrivaled view. 4x Slow Motion, RockSteady stabilization,
                        and distortion correction give pilots even smoother, more dramatic results.
                    </p>
                    <button
                        style={{
                            borderRadius: '32',
                            padding: '12px 24px',
                            backgroundColor: 'transparent',
                            color: '#fff',
                            fontSize: '16px',
                            fontWeight: 700,
                            border: '1px solid #fff',
                            outline: 'none'
                        }}
                    >
                        Watch HD Video
                    </button>
                </div>
            ]}
        />
    )
}

export default FullScreenProceduralExample;

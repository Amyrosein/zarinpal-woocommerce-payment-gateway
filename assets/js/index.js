const settings = window.wc.wcSettings.getSetting( 'WC_ZPal_data', {} );
const label = window.wp.htmlEntities.decodeEntities( settings.title ) || '';

const { registerPaymentMethod } = window.wc.wcBlocksRegistry



const Content = () => {
    return window.wp.htmlEntities.decodeEntities( settings.description || '' );
};

const Icon = () => {
    return settings.icon
        ? React.createElement('img', { src: settings.icon, style: { marginLeft: '20px' } })
        : null;
}

const Label = () => {
    return React.createElement(
        'span',
        { style: { width: '100%', display: 'flex', gap: '5px' } },
        label,
        React.createElement(Icon)
    );
}



registerPaymentMethod({
    name: "WC_ZPal",
    label: React.createElement(Label),
    content: React.createElement(Content),
    edit: React.createElement(Content),
    canMakePayment: () => true,
    ariaLabel: "label", // Update this as needed
    supports: {
        features: settings.supports,
    }
});
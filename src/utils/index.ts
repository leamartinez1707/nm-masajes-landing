export const handleWhatsAppContact = (message: string) => {
    const phoneNumber = '+59898323837';
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\s+/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
};
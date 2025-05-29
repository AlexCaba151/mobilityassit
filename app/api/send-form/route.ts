import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';
import { PDFDocument, rgb, StandardFonts } from 'pdf-lib';

export async function POST(request: Request) {
try {
    const data = await request.json();
    
    // Crear el PDF
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage([595.28, 841.89]); // A4
    const font = await pdfDoc.embedFont(StandardFonts.Helvetica);
    const fontSize = 12;
    
    // Añadir título
    page.drawText('Solicitud de Dispositivo de Movilidad', {
    x: 50,
    y: 800,
    size: 18,
    font,
    color: rgb(0, 0, 0),
    });
    
    // Información personal
    page.drawText('Información Personal:', {
    x: 50,
    y: 760,
    size: 14,
    font,
    color: rgb(0, 0, 0),
    });
    
    page.drawText(`Nombre: ${data.firstName} ${data.lastName}`, {
    x: 50,
    y: 740,
    size: fontSize,
    font,
    });
    
    page.drawText(`Email: ${data.email}`, {
    x: 50,
    y: 720,
    size: fontSize,
    font,
    });
    
    page.drawText(`Teléfono: ${data.phone}`, {
    x: 50,
    y: 700,
    size: fontSize,
    font,
    });
    
    page.drawText(`Dirección: ${data.address}, ${data.city}, ${data.state}, ${data.zipCode}`, {
    x: 50,
    y: 680,
    size: fontSize,
    font,
    });
    
    page.drawText(`Barrio/Rama: ${data.ward}`, {
    x: 50,
    y: 660,
    size: fontSize,
    font,
    });
    
    // Información del dispositivo
    page.drawText('Información del Dispositivo:', {
    x: 50,
    y: 620,
    size: 14,
    font,
    color: rgb(0, 0, 0),
    });
    
    page.drawText(`Tipo de dispositivo: ${data.deviceType}`, {
    x: 50,
    y: 600,
    size: fontSize,
    font,
    });
    
    page.drawText(`Especificaciones: ${data.deviceSpecification || 'No especificado'}`, {
    x: 50,
    y: 580,
    size: fontSize,
    font,
    });
    
    page.drawText(`Duración: ${data.duration || 'No especificado'}`, {
    x: 50,
    y: 560,
    size: fontSize,
    font,
    });
    
    page.drawText(`Información adicional: ${data.additionalInfo || 'No proporcionada'}`, {
    x: 50,
    y: 540,
    size: fontSize,
    font,
    });
    
    // Guardar el PDF
    const pdfBytes = await pdfDoc.save();
    
    // Configurar el transporte de correo
   // Configurar el transporte con Gmail
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'yerlin.alec21@gmail.com', // Reemplaza con tu correo
      pass: 'Alexcaba2121', // Reemplaza con tu contraseña de aplicación
    },
});
    
    // Enviar el correo con el PDF adjunto
const info = await transporter.sendMail({
    from: '"Formulario MobilityAssist" <yerlin.alec21@gmail.com>', // Reemplaza con tu correo
    to: "yerlin.alec21@gmail.com", // Reemplaza con el correo de destino
    subject: `Nueva solicitud de dispositivo de movilidad - ${data.firstName} ${data.lastName}`,
    html: `
        <h1>Nueva solicitud de dispositivo de movilidad</h1>
        <p>Se ha recibido una nueva solicitud con los siguientes datos:</p>
        <h2>Información Personal</h2>
        <p><strong>Nombre:</strong> ${data.firstName} ${data.lastName}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Teléfono:</strong> ${data.phone}</p>
        <p><strong>Dirección:</strong> ${data.address}, ${data.city}, ${data.state}, ${data.zipCode}</p>
        <p><strong>Barrio/Rama:</strong> ${data.ward}</p>
        
        <h2>Información del Dispositivo</h2>
        <p><strong>Tipo de dispositivo:</strong> ${data.deviceType}</p>
        <p><strong>Especificaciones:</strong> ${data.deviceSpecification || 'No especificado'}</p>
        <p><strong>Duración:</strong> ${data.duration || 'No especificado'}</p>
        <p><strong>Información adicional:</strong> ${data.additionalInfo || 'No proporcionada'}</p>
    `,
    attachments: [
        {
        filename: `solicitud-${data.firstName}-${data.lastName}.pdf`,
        content: Buffer.from(pdfBytes),
        contentType: 'application/pdf',
        },
    ],
    });
    
    return NextResponse.json({ success: true });
} catch (error) {
    console.error('Error al enviar el correo:', error);
    return NextResponse.json(
    { error: 'Error al procesar la solicitud' },
    { status: 500 }
    );
}
}
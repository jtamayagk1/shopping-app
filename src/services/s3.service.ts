import { GetObjectCommand, S3Client } from "@aws-sdk/client-s3";


const bucket = process.env.NEXT_PUBLIC_AWS_BUCKET_NAME

const s3 = new S3Client({
  region: process.env.NEXT_PUBLIC_AWS_REGION,
  credentials: {
    accessKeyId: process.env.NEXT_PUBLIC_AWS_ACCESS_KEY_ID as string,
    secretAccessKey: process.env.NEXT_PUBLIC_AWS_SECRET_ACCESS_KEY as string,
  },
});


export async function getItem(){
  const command = new GetObjectCommand({
    Bucket: bucket,
    Key: 'items-images/soccer_ball.jpeg'
  })
  
  try {
    const res = await s3.send(command)
    return res
  } catch (error) {
    console.log(error)
  }

  return null
}

import Link from "next/link"


function Error({ statusCode }) {
    return (
      <><p>
            {statusCode
                ? `Coś poszło nie tak, błąd: ${statusCode}.`
                : 'Coś poszło nie tak.'}
        </p>
        <Link href="/">Powrót na stronę główną</Link></>
    )
  }
   
  Error.getInitialProps = ({ res, err }) => {
    const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return { statusCode }
  }
   
  export default Error
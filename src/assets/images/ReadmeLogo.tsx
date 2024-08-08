import * as React from 'react'
import type { SVGProps } from 'react'
interface SVGRProps {
  title?: string;
  titleId?: string;
}
const SvgReadmeLogo = ({
  title,
  titleId,
  ...props
}: SVGProps<SVGSVGElement> & SVGRProps) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20px"
    height="20px"
    fill="none"
    viewBox="0 0 923 308"
    aria-labelledby={titleId}
    {...props}
  >
    {title ? <title id={titleId}>{title}</title> : null}
    <mask id="readme-logo_svg__a" fill="#fff">
      <rect width={823} height={208} x={50} y={50} rx={8} />
    </mask>
    <rect
      width={823}
      height={208}
      x={50}
      y={50}
      stroke="#000"
      strokeWidth={40}
      mask="url(#readme-logo_svg__a)"
      rx={8}
    />
    <path
      fill="#000"
      d="M157.896 185.056c-3.344 0-6.189-.675-8.536-2.024-2.288-1.408-3.989-3.315-5.104-5.72h-.528l-.792 6.688h-6.072v-63.36h7.392v25.96c1.115-1.936 2.845-3.637 5.192-5.104 2.405-1.467 5.221-2.2 8.448-2.2 3.755 0 7.069.88 9.944 2.64 2.875 1.76 5.133 4.341 6.776 7.744 1.643 3.403 2.464 7.539 2.464 12.408 0 4.928-.821 9.123-2.464 12.584-1.643 3.403-3.931 5.984-6.864 7.744-2.875 1.76-6.16 2.64-9.856 2.64Zm-.968-7.04c3.696 0 6.717-1.291 9.064-3.872 2.405-2.64 3.608-6.629 3.608-11.968s-1.203-9.299-3.608-11.88c-2.347-2.64-5.368-3.96-9.064-3.96-3.696 0-6.747 1.32-9.152 3.96-2.405 2.581-3.608 6.541-3.608 11.88s1.203 9.328 3.608 11.968c2.405 2.581 5.456 3.872 9.152 3.872Zm35.87 5.984v-6.336h11.176v-28.776c0-1.467-.704-2.2-2.112-2.2h-7.92v-6.336h10.648c1.936 0 3.49.528 4.664 1.584 1.173 1.056 1.76 2.611 1.76 4.664v1.848h.352c.704-2.933 2.024-5.192 3.96-6.776 1.994-1.584 4.752-2.376 8.272-2.376h8.008v7.832h-9.064c-3.579 0-6.336 1.203-8.272 3.608-1.936 2.347-2.904 5.368-2.904 9.064v17.864h13.728V184h-32.296Zm71.333 1.056c-5.28 0-9.269-1.584-11.968-4.752-2.698-3.168-4.048-7.744-4.048-13.728v-26.224h7.392v25.344c0 3.872.851 6.923 2.552 9.152 1.76 2.171 4.4 3.256 7.92 3.256 3.52 0 6.483-1.173 8.888-3.52 2.406-2.405 3.608-5.837 3.608-10.296v-23.936h7.392V184h-6.16l-.792-6.6h-.44c-1.173 2.112-3.021 3.931-5.544 5.456-2.522 1.467-5.456 2.2-8.8 2.2ZM327.193 184c-3.989 0-7.128-.968-9.416-2.904-2.288-1.936-3.432-5.427-3.432-10.472v-23.936h-11.088v-6.336h6.6c2.992 0 4.723-1.467 5.192-4.4l1.232-6.776h5.456v11.176h17.424v6.336h-17.424v23.936c0 2.464.557 4.195 1.672 5.192 1.173.997 3.168 1.496 5.984 1.496h9.768V184h-11.968Zm47.133 1.056c-3.461 0-6.336-.616-8.624-1.848-2.288-1.232-3.989-2.845-5.104-4.84-1.114-2.053-1.672-4.283-1.672-6.688 0-4.459 1.614-7.832 4.84-10.12 3.286-2.347 7.656-3.52 13.112-3.52h11.968v-.88c0-7.627-3.49-11.44-10.472-11.44-2.816 0-5.192.616-7.128 1.848-1.877 1.232-3.08 3.168-3.608 5.808h-7.568c.294-2.933 1.262-5.456 2.904-7.568 1.702-2.112 3.872-3.725 6.512-4.84 2.64-1.115 5.603-1.672 8.888-1.672 6.219 0 10.737 1.643 13.553 4.928 2.874 3.227 4.312 7.539 4.312 12.936V184h-6.336l-.616-6.776h-.616c-1.291 2.112-3.022 3.96-5.193 5.544-2.112 1.525-5.162 2.288-9.152 2.288Zm1.32-6.512c2.816 0 5.192-.675 7.128-2.024 1.995-1.349 3.491-3.139 4.489-5.368 1.055-2.229 1.583-4.664 1.583-7.304h-11.352c-3.989 0-6.805.675-8.448 2.024-1.584 1.349-2.376 3.139-2.376 5.368 0 2.288.763 4.077 2.288 5.368 1.526 1.291 3.755 1.936 6.688 1.936ZM413.628 184v-6.336H428.5v-48.488c0-1.467-.733-2.2-2.2-2.2h-11.088v-6.336h12.848c2.523 0 4.459.675 5.808 2.024 1.349 1.349 2.024 3.285 2.024 5.808v49.192h14.872V184h-37.136Zm74.678-51.392c-1.76 0-3.227-.587-4.4-1.76-1.174-1.173-1.76-2.581-1.76-4.224 0-1.701.586-3.109 1.76-4.224 1.173-1.173 2.64-1.76 4.4-1.76 1.701 0 3.138.587 4.312 1.76 1.232 1.115 1.848 2.523 1.848 4.224 0 1.643-.616 3.051-1.848 4.224-1.174 1.173-2.611 1.76-4.312 1.76ZM471.234 184v-6.336h13.904v-28.776c0-1.467-.734-2.2-2.2-2.2H472.73v-6.336h11.968c5.221 0 7.832 2.611 7.832 7.832v29.48h13.904V184h-35.2Zm73.445 1.056c-5.573 0-10.09-1.291-13.552-3.872-3.402-2.64-5.309-6.248-5.72-10.824h7.656c.352 2.405 1.526 4.371 3.52 5.896 2.054 1.525 4.811 2.288 8.272 2.288 3.286 0 5.72-.704 7.304-2.112 1.643-1.408 2.464-3.021 2.464-4.84 0-2.464-.968-4.136-2.904-5.016-1.936-.939-4.84-1.643-8.712-2.112-4.634-.528-8.477-1.789-11.528-3.784-3.05-1.995-4.576-4.987-4.576-8.976 0-3.579 1.496-6.541 4.488-8.888 2.992-2.347 7.07-3.52 12.232-3.52 5.104 0 9.123 1.173 12.056 3.52 2.934 2.288 4.606 5.573 5.016 9.856h-7.304c-.176-2.112-1.202-3.784-3.08-5.016-1.818-1.291-4.106-1.936-6.864-1.936-2.874 0-5.104.557-6.688 1.672-1.584 1.056-2.376 2.464-2.376 4.224 0 1.76.88 3.227 2.64 4.4 1.819 1.115 4.664 1.848 8.536 2.2 3.051.352 5.838.939 8.36 1.76 2.523.821 4.518 2.112 5.984 3.872 1.526 1.76 2.288 4.224 2.288 7.392.059 2.64-.674 5.016-2.2 7.128-1.466 2.053-3.52 3.696-6.16 4.928-2.64 1.173-5.69 1.76-9.152 1.76ZM576.501 184v-43.648h6.072l.792 5.104h.44a10.971 10.971 0 0 1 3.432-4.4c1.584-1.173 3.491-1.76 5.72-1.76 2.229 0 4.107.557 5.632 1.672 1.584 1.056 2.728 2.552 3.432 4.488h.352c.763-1.76 1.995-3.227 3.696-4.4 1.701-1.173 3.755-1.76 6.16-1.76 3.344 0 5.837 1.144 7.48 3.432 1.701 2.229 2.552 5.221 2.552 8.976V184h-7.216v-31.152c0-2.112-.44-3.784-1.32-5.016-.821-1.232-2.171-1.848-4.048-1.848-1.936 0-3.52.733-4.752 2.2-1.232 1.467-1.848 3.549-1.848 6.248V184h-7.304v-31.152c0-2.112-.411-3.784-1.232-5.016-.821-1.232-2.171-1.848-4.048-1.848-1.936 0-3.549.733-4.84 2.2-1.232 1.467-1.848 3.549-1.848 6.248V184h-7.304Zm64.03-27.632v-6.336h29.04v6.336h-29.04Zm66.845 28.688c-5.28 0-9.269-1.584-11.968-4.752-2.698-3.168-4.048-7.744-4.048-13.728v-26.224h7.392v25.344c0 3.872.851 6.923 2.552 9.152 1.76 2.171 4.4 3.256 7.92 3.256 3.52 0 6.483-1.173 8.888-3.52 2.406-2.405 3.608-5.837 3.608-10.296v-23.936h7.392V184h-6.16l-.792-6.6h-.44c-1.173 2.112-3.021 3.931-5.544 5.456-2.522 1.467-5.456 2.2-8.8 2.2Zm57.958-52.448c-1.76 0-3.227-.587-4.4-1.76-1.173-1.173-1.76-2.581-1.76-4.224 0-1.701.587-3.109 1.76-4.224 1.173-1.173 2.64-1.76 4.4-1.76 1.701 0 3.139.587 4.312 1.76 1.232 1.115 1.848 2.523 1.848 4.224 0 1.643-.616 3.051-1.848 4.224-1.173 1.173-2.611 1.76-4.312 1.76ZM748.262 184v-6.336h13.904v-28.776c0-1.467-.733-2.2-2.2-2.2h-10.208v-6.336h11.968c5.221 0 7.832 2.611 7.832 7.832v29.48h13.904V184h-35.2Z"
    />
  </svg>
)
export default SvgReadmeLogo

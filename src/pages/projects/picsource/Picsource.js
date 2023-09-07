import sliceAnnotationLarge from 'assets/Security.png';
import sliceAnnotationPlaceholder from 'assets/Security.png';
import sliceAnnotation from 'assets/Security.png';
import sliceAppLarge from 'assets/Picsource.png';
import sliceAppPlaceholder from 'assets/slice-app-placeholder.jpg';
import sliceApp from 'assets/Picsource.png';
import sliceBackgroundBarLarge from 'assets/R.png';
import sliceBackgroundBarPlaceholder from 'assets/R.png';
import sliceBackgroundBar from 'assets/R.png';
import sliceBackgroundLarge from 'assets/R.png';
import sliceBackgroundPlaceholder from 'assets/R.png';
import sliceBackground from 'assets/R.png';
import sliceIrlPlaceholder from 'assets/Picprofile.png';
import sliceIrl from 'assets/Picprofile.png';
import sliceSidebarAnnotationsLarge from 'assets/user.jpg';
import sliceSidebarAnnotationsPlaceholder from 'assets/user.jpg';
import sliceSidebarAnnotations from 'assets/user.jpg';
import sliceSidebarLayersLarge from 'assets/user.jpg';
import sliceSidebarLayersPlaceholder from 'assets/slice-sidebar-layers-placeholder.png';
import sliceSidebarLayers from 'assets/AIsearch.png';
import sliceSlidesLarge from 'assets/AIsearch.png';
import sliceSlidesPlaceholder from 'assets/AIsearch.png';
import sliceSlides from 'assets/slice-slides.jpg';
import { Footer } from 'components/Footer';
import { Image } from 'components/Image';
import { Meta } from 'components/Meta';
import {
  ProjectBackground,
  ProjectContainer,
  ProjectHeader,
  ProjectImage,
  ProjectSection,
  ProjectSectionColumns,
  ProjectSectionContent,
  ProjectSectionHeading,
  ProjectSectionText,
  ProjectTextRow,
} from 'layouts/Project';
import { Fragment } from 'react';
import { media } from 'utils/style';
import styles from './Picsource.module.css';

const title = 'Picsource - Social Media app';
const description =
  'Welcome to Picsource, the ultimate photo sharing and uploading, downloading app that allows you to capture and share your lifes most memorable moments with ease. ';
  const roles = ['User Research', 'UX Design', 'Interface Design', 'Data Science'];

export const Picsource = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <ProjectContainer className={styles.slice}>
        <ProjectBackground
          src={sliceBackground}
          srcSet={`${sliceBackground.src} 1280w, ${sliceBackgroundLarge.src} 2560w`}
          placeholder={sliceBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="https://picsourcez.netlify.app/"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={[sliceApp, sliceAppLarge]}
              placeholder={sliceAppPlaceholder}
              alt="The Slice web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>User-friendly Interface</ProjectSectionHeading>
              <ProjectSectionText>
                It has a user-friendly interface that is easy to navigate and allows users to easily upload, edit and share pictures
              </ProjectSectionText>
              <ProjectSectionText>
                Picsource prides itself on its user-friendly interface that makes it easy and intuitive for anyone to navigate and use. Our app&apos;s interface has been carefully designed to provide a seamless user experience, with simple and clear navigation menus, easy-to-use controls, and an aesthetically pleasing layout that enhances the viewing experience. 
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={[sliceSidebarLayers, sliceSidebarLayersLarge]}
                placeholder={sliceSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={[sliceSidebarAnnotations, sliceSidebarAnnotationsLarge]}
                placeholder={sliceSidebarAnnotationsPlaceholder}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Improving the experience</ProjectSectionHeading>
              <ProjectSectionText>
                At Picsource, we are committed to continually improving the user experience for our users. We take feedback seriously and use it to make necessary adjustments and implement new features that enhance the user experience. Our development team works tirelessly to identify areas that need improvement and implement changes that make the app more user-friendly and enjoyable. We also stay up-to-date with the latest technology trends to ensure that our app stays relevant and meets the evolving needs of our users.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={[sliceSlides, sliceSlidesLarge]}
              placeholder={sliceSlidesPlaceholder}
              alt="The new My Slides tab in slice, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={[sliceBackgroundBar, sliceBackgroundBarLarge]}
                  placeholder={sliceBackgroundBarPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
              <div className={styles.gridForeground}>
                <Image
                  srcSet={[sliceAnnotation, sliceAnnotationLarge]}
                  placeholder={sliceAnnotationPlaceholder}
                  alt="An annotation preview popover with statistics for shape perimeter and area."
                  sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading> Security </ProjectSectionHeading>
              <ProjectSectionText>
                User security is of utmost importance for a web-based app photo sharing platform like Picsource. The platform must ensure that all users&apos; data, including their photos, personal information, and login credentials, are kept secure from unauthorized access, misuse, and hacking attempts. Picsource should employ the latest security technologies and measures, such as encryption, firewalls, and two-factor authentication, to safeguard user data.
                By prioritizing user security, Picsource can build trust and loyalty among its users, encouraging them to share and interact with each other on the platform with confidence.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                Picsource&apos; s project outcomes may include a variety of deliverables and measures. 
                These could include increasing user engagement and activity on the platform, 
                improving the user experience, expanding the app&apos; s functionality, and 
                increasing the number of downloads and active users. Other project outcomes
                 may focus on security and privacy measures, ensuring that user data is kept secure
                  and protected.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={sliceIrl}
              placeholder={sliceIrlPlaceholder}
              alt="Picsource banner"
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};

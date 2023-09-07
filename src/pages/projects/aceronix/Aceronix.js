import aceronixAnnotationLarge from 'assets/File.png';
import aceronixAnnotationPlaceholder from 'assets/File.png';
import aceronixAnnotation from 'assets/File.png';
import aceronixAppLarge from 'assets/Acerposter.png';
import aceronixAppPlaceholder from 'assets/slice-app-placeholder.jpg';
import aceronixApp from 'assets/Acerposter.png';
import aceronixBackgroundBarLarge from 'assets/R.png';
import aceronixBackgroundBarPlaceholder from 'assets/R.png';
import aceronixBackgroundBar from 'assets/R.png';
import aceronixBackgroundLarge from 'assets/Back.png';
import aceronixBackgroundPlaceholder from 'assets/Back.png';
import aceronixBackground from 'assets/Back.png';
import acronisSidebar from 'assets/qr.jpg';
import acronisSidebarLarge from 'assets/qr.jpg';
import acronisSidebarPlaceholder from 'assets/qr.jpg';
import aceronixIrlPlaceholder from 'assets/Picprofile.png';
import aceronixIrl from 'assets/outcome.png';
import aceronixSidebarAnnotationsLarge from 'assets/chat.jpg';
import aceronixSidebarAnnotationsPlaceholder from 'assets/chat.jpg';
import aceronixSidebarAnnotations from 'assets/chat.jpg';
import aceronixSidebarLayersLarge from 'assets/chat.jpg';
import aceronixSidebarLayersPlaceholder from 'assets/slice-sidebar-layers-placeholder.png';
import aceronixSidebarLayers from 'assets/chat.jpg';
import aceronixSlidesLarge from 'assets/Acronis.png';
import aceronixSlidesPlaceholder from 'assets/Acronis.png';
import aceronixSlides from 'assets/slice-slides.jpg';
import acronisBackgroundBar from 'assets/group.jpg';
import acronisBackgroundBarLarge from 'assets/group.jpg';
import acronisBackgroundBarPlaceholder from 'assets/group.jpg';
import acronisAnnotation from 'assets/grp.png';
import acronisAnnotationLarge from 'assets/grp.png';
import acronisAnnotationPlaceholder from 'assets/grp.png';
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
import styles from './Aceronix.module.css';

const title = 'Acronis - a secure messaging app';
const description =
  'Our app features end-to-end encryption, meaning that your messages are protected from prying eyes and can only be read by you and your intended recipient. We believe that your personal information should remain private.';
  const roles = ['End-to-End encryption', 'Reliable', 'Easy to use', 'Note - Releasing on 29-08-2023'];

export const Aceronix = () => {
  return (
    <Fragment>
      <Meta title={title} prefix="Projects" description={description} />
      <ProjectContainer className={styles.aceronix}>
        <ProjectBackground
          src={aceronixBackground}
          srcSet={`${aceronixBackground.src} 1280w, ${aceronixBackgroundLarge.src} 2560w`}
          placeholder={aceronixBackgroundPlaceholder}
          opacity={0.8}
        />
        <ProjectHeader
          title={title}
          description={description}
          url="#"
          roles={roles}
        />
        <ProjectSection padding="top">
          <ProjectSectionContent>
            <ProjectImage
              srcSet={[aceronixApp, aceronixAppLarge]}
              placeholder={aceronixAppPlaceholder}
              alt="The aceronix web application showing a selected user annotation."
              sizes={`(max-width: ${media.mobile}px) 100vw, (max-width: ${media.tablet}px) 90vw, 80vw`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>End-to-End Encryption</ProjectSectionHeading>
              <ProjectSectionText>
               All communication on Acronis is encrypted end-to-end, which means that only the sender and recipient can read the messages, voice calls, and file transfers. This ensures that no one, including Acronis itself, can access the content of the messages.
              </ProjectSectionText>
              <ProjectSectionText>
                Acronis does not collect any user data or metadata, including phone numbers, email addresses, or other identifying information. This means that users can communicate anonymously if they wish.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
              <Image
                className={styles.sidebarImage}
                srcSet={[aceronixSidebarLayers, aceronixSidebarLayersLarge]}
                placeholder={aceronixSidebarLayersPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={[aceronixSidebarAnnotations, aceronixSidebarAnnotationsLarge]}
                placeholder={aceronixSidebarAnnotationsPlaceholder}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection light>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Cross-platform Compatiblity</ProjectSectionHeading>
              <ProjectSectionText>
              Acronis is available for both Android and iOS devices, and can also be used on desktop computers through the Aceronix Web app.
              As well as it has a number of customizable features, including the ability to change the app&apos; s appearance, set up automatic replies, and create polls.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              srcSet={[aceronixSlides, aceronixSlidesLarge]}
              placeholder={aceronixSlidesPlaceholder}
              alt="The new My Slides tab in aceronix, showing annotated and favorited slides."
              sizes={`(max-width: ${media.mobile}px) 500px, (max-width: ${media.tablet}px) 800px, 1000px`}
            />
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={[aceronixBackgroundBar, aceronixBackgroundBarLarge]}
                  placeholder={aceronixBackgroundBarPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
              <div className={styles.gridForeground}>
                <Image
                  srcSet={[aceronixAnnotation, aceronixAnnotationLarge]}
                  placeholder={aceronixAnnotationPlaceholder}
                  alt="An annotation preview popover with statistics for shape perimeter and area."
                  sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading> File Transfering</ProjectSectionHeading>
              <ProjectSectionText>
                Acronis allows users to send multiple files at once, making it easy to share a large number of photos or documents with a contact.
                Files that are sent through Acronis are stored only on the devices of the sender and recipient. Acronis does not store files on its servers, which helps to protect the privacy of users&apos; content.
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>
        <ProjectSection>
          <ProjectSectionColumns centered className={styles.columns}>
            <div className={styles.imagesText}>
              <ProjectSectionHeading>QR Code Verification</ProjectSectionHeading>
              <ProjectSectionText>
              Acronis is the ability to verify the identity of your contacts using QR codes.

QR code verification is a way to ensure that you are communicating with the person you think you are, and not an imposter. 
              </ProjectSectionText>
              <ProjectSectionText>
                It works by comparing the public key of your contact&apos; s Acronis account with the one displayed on their device. When you scan their QR code, Acronis will verify that the public key matches and confirm that you are communicating with the right person.
              </ProjectSectionText>
            </div>
            <div className={styles.sidebarImages}>
            <Image
                className={styles.sidebarImage}
                srcSet={[acronisSidebar, acronisSidebarLarge]}
                placeholder={acronisSidebarPlaceholder}
                alt="The layers sidebar design, now with user profiles."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
              <Image
                className={styles.sidebarImage}
                srcSet={[acronisSidebar, acronisSidebarLarge]}
                placeholder={acronisSidebarPlaceholder}
                alt="Multiple user annotations on a shared layer."
                sizes={`(max-width: ${media.mobile}px) 200px, 343px`}
              />
            </div>
          </ProjectSectionColumns>
        </ProjectSection>
        <ProjectSection padding="top">
          <ProjectSectionContent className={styles.grid}>
            <div className={styles.gridImage}>
              <div className={styles.gridBackground}>
                <Image
                  srcSet={[acronisBackgroundBar, acronisBackgroundBarLarge]}
                  placeholder={acronisBackgroundBarPlaceholder}
                  alt=""
                  role="presentation"
                  sizes={`(max-width: ${media.mobile}px) 312px, (max-width: ${media.tablet}px) 408px, 514px`}
                />
              </div>
              <div className={styles.gridForeground}>
                <Image
                  srcSet={[acronisAnnotation, acronisAnnotationLarge]}
                  placeholder={acronisAnnotationPlaceholder}
                  alt="An annotation preview popover with statistics for shape perimeter and area."
                  sizes={`(max-width: ${media.mobile}px) 584px, (max-width: ${media.tablet}px) 747px, 556px`}
                />
              </div>
            </div>
            <div className={styles.gridText}>
              <ProjectSectionHeading>Group Chats</ProjectSectionHeading>
              <ProjectSectionText>
                Acronis is a secure messaging app that offers end-to-end encryption for all messages, including group chats. This means that only the members of the group chat can read the messages and no one else, not even Acronis or any third-party, can access the messages.

In Acronis group chats, all members have the same level of access and can participate in the conversation equally. Group admins have additional privileges, such as the ability to add or remove members, change the group name and profile picture, and manage permissions.

Acronis also offers features such as polls, location sharing, and the ability to send files up to 20MB in size. These features can be useful in group chats for coordinating activities or sharing information.

Acronis group chats can be used for a variety of purposes, such as personal conversations, work-related discussions, or organizing events. 
              </ProjectSectionText>
            </div>
          </ProjectSectionContent>
        </ProjectSection>

        <ProjectSection>
          <ProjectSectionContent>
            <ProjectTextRow>
              <ProjectSectionHeading>Project outcomes</ProjectSectionHeading>
              <ProjectSectionText>
                  Acronis is a messaging app that prioritizes security and privacy. Its end-to-end encryption ensures that messages are secure, and the app&apos; s commitment to not collecting user data makes it a popular choice for those who value their privacy. Acronis&apos; s cross-platform compatibility also allows users to communicate with each other regardless of their device. Overall, Acronis is a great option for anyone looking for a secure and private messaging app.
              </ProjectSectionText>
            </ProjectTextRow>
            <Image
              src={aceronixIrl}
              placeholder={aceronixIrlPlaceholder}
              alt="acronis image IRL"
            />
          </ProjectSectionContent>
        </ProjectSection>
      </ProjectContainer>
      <Footer />
    </Fragment>
  );
};

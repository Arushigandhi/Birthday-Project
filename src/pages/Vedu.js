import React from 'react';
import styled from 'styled-components';
import four from '../assets/images/four.jpeg';
import five from '../assets/images/five.jpeg';
import six from '../assets/images/six.jpeg';

const VeduText = styled.div`
  max-width: 100%;
  margin: 0;
  font-size: 1.8rem;
  line-height: 1.3em;
  text-align: justify;
  padding: 100px 50px;
  .aboutImg1 {
    max-width: 600px;
    border: 2px solid var(--gray-1);
    padding: 25px;
    display: block;
    margin: 100px auto;
  }
`;

export default function Vedu() {
  return (
    <div>
      <VeduText>
        Hi tiw <br />
        It’s been 11 years since we’ve been friends. Fuck man. That’s a really
        long time. From junior school carpools in my mom’s khatara red swift 🚗
        when we played some game where ate crayons in the backseat to making a
        song on you being from bhiwadi to maintaining a friendship an ocean
        apart. Someone in ntu asked me other than family who do you think will
        be there first when you call them dying. I thought of you cus I know
        that there’s this unsaid understanding between us. Even if we don’t talk
        everyday I know that I always have a friend, a supporter, a therapist
        and a free doctor in you. So many have walked in and out of this
        friendship but you and me have stayed strong. You've been a constant in
        my life for a long time and we've literally grown up together. I'm so
        proud of you for getting through these tough two years and I know that
        wherever you go you'll continue to make me very proud of everything you
        have and will become.
        <br />
        <br />I loved you when we were in class 2, I love you right now and I
        know I’ll love you way into the future whether we’re in different
        countries, timezones etc. Happy birthday tiw/tewari/tew. I miss you and
        I promise we’ll have the best time in December
        <img className="aboutImg1" src={six} alt="" />
        <img className="aboutImg1" src={four} alt="" />
        <img className="aboutImg1" src={five} alt="" />
      </VeduText>
    </div>
  );
}

<!--
Copyright 2017 ODK Central Developers
See the NOTICE file at the top-level directory of this distribution and at
https://github.com/opendatakit/central-frontend/blob/master/NOTICE.

This file is part of ODK Central. It is subject to the license terms in
the LICENSE file found in the top-level directory of this distribution and at
https://www.apache.org/licenses/LICENSE-2.0. No part of ODK Central,
including this file, may be copied, modified, propagated, or distributed
except according to the terms contained in the LICENSE file.
-->
<template>
  <div>
    <page-head>
      <template slot="title">System Settings</template>
      <template slot="tabs">
        <li :class="tabClass('backups')" role="presentation">
          <router-link :to="tabPath('backups')">Backups</router-link>
        </li>
      </template>
    </page-head>
    <page-body>
      <keep-alive>
        <router-view/>
      </keep-alive>
    </page-body>
  </div>
</template>

<script>
import tab from '../../mixins/tab';

export default {
  name: 'SystemHome',
  mixins: [tab()],
  methods: {
    tabPathPrefix() {
      return '/system';
    }
  }
};
</script>
